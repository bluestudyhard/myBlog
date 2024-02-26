## 想解析 html 的起因

我的 navigation 有一个功能需求就是输入网站 url 就可以直接得到网站的 icon 和名称(描述)，但是这样的话需要直接根据 url 去爬取
获取到的 data 是一个 html，所以需要解析

## 两天后想到了绝妙的方法

from fish 因为我这个需求单纯的只是解析书签，然后如果这点小事都要传到后端再传回来的话会很费资源，所以最好就是在前端搞定了以后，将确认要的网站丢回去。所以有一个很妙的方法，众所周知，只要拿到了文件，然后将它加到一个`<div></div> `浏览器就自己会帮你解析成 html，然后就可以使用 dom 元素了(node 里达咩)
综上，代码端上来罢

```ts 
const bookMarkList = ref<{ name: string; bookmarks: bookMarkType[] }[]>([]);
function parseHtml(html: HTMLElement) {
  const main = html.querySelector("DL DT");
  const DT = Array.from(main!.querySelectorAll("DT"));
  return DT.map((item) => {
    const name = item.querySelector("H3");
    if (!name) return undefined;
    const _bookmark = Array.from(
      item.querySelectorAll("A")
    ) as HTMLAnchorElement[];
    const bookmarks = _bookmark.map((bookmark) => ({
      title: bookmark.textContent,
      url: bookmark.href,
      icon: bookmark.attributes.getNamedItem("icon")?.value,
    }));
    return {
      name: name.textContent,
      bookmarks,
    };
  }).filter((item) => item !== undefined);
}
function onDrop(files: File[] | null) {
  if (!files) return;
  console.log(files);
  // 如果文件是html就解析
  files.forEach((file) => {
    if (file.type === "text/html") {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function (e) {
        const div = document.createElement("div");
        div.innerHTML = e.target?.result as string;
        console.log(div);
        // console.log(typeof div)
        const data = parseHtml(div);
        bookMarkList.value = data as {
          name: string;
          bookmarks: bookMarkType[];
        }[];
      };
    }
  });
}
```

官网在(MDN)(https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser)
这玩意很原生，试了下在 node 里面不能用，所以我选择了 jsdom)
大概用法

```ts 
const html = fetch(url); // axios.get(url)
const domparser = new DomParser();
const doc = domparser.parseFromString(html,"text/html")
const head = document.querySelect('head')
...
```

### 使用 jsdom

搜了一下相关的库，发现老的一。。。就 jsdom 还是 23 年 4 月更新的，彳亍！用！

```ts 
import express from "express";
import axios from "axios";

import jsdom from "jsdom";

const app = express();
const port = 3080;
const url = "https://www.blueltytblog.top/";
async function testParse(url: string) {
  const res = await axios.get(url);
  // 获取目标网页的html中的head，然后拿到title和icon
  const html = res.data;
  const dom = new jsdom.JSDOM(html);
  const document = dom.window.document;
  const head = document.querySelector("head");
  const title = head.querySelector("title").textContent;
  const icon = head.querySelector('link[rel="icon"]').href;
  console.log(title, icon);

  return res.data;
}
app.get("/", async (req, res) => {
  const result = await testParse(url);
  // 查看result属于什么类型

  res.send(result);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
```
