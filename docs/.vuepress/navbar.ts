import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端知识",
    icon: "pen-to-square",
    prefix: "/frontend/",
    children: [
      {
        text: "HTML",
        icon: "pen-to-square",
        children: [{ text: "HTML", icon: "pen-to-square", link: "html" }],
      },
      {
        text: "css",
        icon: "pen-to-square",
        prefix: "css/",
        children: [
          { text: "css", icon: "pen-to-square", link: "css" },
          { text: "scss", icon: "pen-to-square", link: "scss" },
        ],
      },
      {
        text: "JavaScript",
        icon: "pen-to-square",
        prefix: "javascript/",
        children: [{ text: "js basic", icon: "pen-to-square", link: "js" }],
      },
    ],
  },

  "/demo/",

  "/timeline/",
]);
