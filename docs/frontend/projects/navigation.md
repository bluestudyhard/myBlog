## 日志




#### 将文档导出为Excel的方法&&好用的Arrayflat()
```js  
import * as XLSX from 'xlsx'
// 注意这里要import * 不然会报错没有默认导出
function exportToExcel() {
    
  // 创建一个工作簿
  const workbook = XLSX.utils.book_new()
  const temExcelArray = tempWebSiteList.flatMap(({ name, bookmarks }) =>
    bookmarks.map(({ title, url, icon }) => ({ name, title, url, icon })),
  )
  console.log(temExcelArray)
  // 创建一个工作表

  const worksheet = XLSX.utils.json_to_sheet(temExcelArray)

  // 将工作表添加到工作簿
  XLSX.utils.book_append_sheet(workbook, worksheet, '拿到的所有书签数据')

  // 将工作簿保存为Excel文件
  XLSX.writeFile(workbook, 'website_list.xlsx')
}
```