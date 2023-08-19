import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { searchPlugin } from "@vuepress/plugin-search";
const __dirname = getDirname(import.meta.url);

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [["link", { rel: "icon", href: "/logo.png" }]],
  lang: "zh-CN",
  title: "melingkk's blog",
  description: "记录日常学习笔记",

  theme,
  plugins: [
    // 注册自定义组件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    // 搜索插件
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
