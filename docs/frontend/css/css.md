## css

### css 长度单位

#### em rem px 等的区别

em 是相对长度单位，其值并不固定，一般会继承父级元素的字体大小。任意浏览器的默认字体高都是 16px，所有未经调整的浏览器都符合： 1em=16px。但如果父级设置了其他字体高度，那此时的 1em 就等于父级设置好的字体高度。

## 实操

### 解决响应式适配时，页面都已经 overflow:hidden 了还是会出现滚动条和下方空白区的问题

这其实应该算是手机的锅，视图区域超出了 html 的区域，这个时候只要在 index.html 上添加

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

就 OK 了
