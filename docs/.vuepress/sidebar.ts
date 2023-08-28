import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      collapsible: true,
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "前端知识",
      icon: "book",
      prefix: "/frontend/",
      collapsible: true,
      children: [
        { text: "html", link: "html.md" },
        {
          text: "Css",
          prefix: "/frontend/css/",
          collapsible: true,
          children: [
            { text: "css", link: "css.md" },
            { text: "scss", link: "scss.md" },
          ],
        },
        {
          text: "javascript",
          prefix: "/frontend/javascript/",
          collapsible: true,
          children: [
            {
              text: "javascript基础",
              link: "js.md",
            } /* /corge/fred.html */,
          ],
        },
        {
          text: "Vue",
          prefix: "/frontend/vue/",
          collapsible: true,
          children: [
            { text: "vue基础", link: "vue.md" } /* /corge/fred.html */,
          ],
        },
      ],
    },
  ],
});
