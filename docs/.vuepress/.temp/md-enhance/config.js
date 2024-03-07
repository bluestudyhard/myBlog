import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-shared@2.0.0-rc.11_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHint } from "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Playground from "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/WEB/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.11_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
