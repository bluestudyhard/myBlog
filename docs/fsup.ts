import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsFolderPath = path.join(__dirname);
const resultFolderPath = path.join(__dirname, 'result');

async function getFileStructure(dirPath: string, fileStructure: any[]) {
    const files = await fs.promises.readdir(dirPath);

    for (const file of files) {
        const filePath = `${dirPath}/${file}`;
        const stats = await fs.promises.stat(filePath);

        if (file === 'images') continue;
        if (file === '.vuepress') continue;
        if (stats.isDirectory()) {
            const directory = {
                text: file,
                prefix: `${file}/`,
                collapsible: true,
                children: [],
            };

            fileStructure.push(directory);
            await getFileStructure(filePath, directory.children);

            const result = JSON.stringify(directory, null, 2);
            await fs.promises.writeFile(path.join(resultFolderPath, `${file}.json`), result);
        } else {
            const fileName = file.replace('.md', '');
            const fileObj = {
                text: fileName,
                link: file,
            };

            fileStructure.push(fileObj);
        }
    }
}

fs.promises.mkdir(resultFolderPath, { recursive: true }).then(() => {
    getFileStructure(docsFolderPath, []);
});