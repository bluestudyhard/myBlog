## 先在这里丢个代码

```ts 
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use(
  "/*",
  createProxyMiddleware({
    target: "https://api.openai.com/", // 无法代理以/api开头的请求
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
    pathRewrite: (path, req) => {
      // 将请求路径中的 '/api' 替换为/*
      return path.replace("/api", "");
    },
    onProxyReq: function (proxyReq, req, res) {
      // 删除 X-Forwarded-For 和 X-Real-IP 头信息 保证不会返回原始客户端的IP
      proxyReq.removeHeader("X-Forwarded-For");
      proxyReq.removeHeader("X-Real-IP");
    },
    onProxyRes: function (proxyRes, req, res) {
      // 删除敏感头信息
      delete proxyRes.headers["server"];
      delete proxyRes.headers["x-powered-by"];
    },
  })
);
module.exports = app;
```
