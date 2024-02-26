---
shortTitle: 全局使用scss变量
---

## 首先先在 styles 里整个 variable.scss

## 然后在 vite.config.ts 里引入以下内容

```js 
css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "../src/assets/styles/variable.scss";',

        },
      },
    },
```
