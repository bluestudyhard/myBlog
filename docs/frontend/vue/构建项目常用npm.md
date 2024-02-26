## 新建 vite 项目

```bash
npm create vite@latest
```

## 新建 vue 项目

```bash
npm init vue@latest
```

## 安装 element plus

```bash
npm install element-plus --save
pnpm install element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
APP.use(ElementPlus)
```

## 安装 vue-router

```bash
pnpm install vue-router@4
```

自动注册路由

```bash
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [];
// 动态的注册路由，不用每次手动添加路由
function importViews() {
  const views = import.meta.glob('../views/*.vue');

  for (const path in views) {
    const name = path.match(/\.\/views(.*)\.vue$/)?.[1]?.toLowerCase();
    // console.log(path.match(/\.\/views(.*)\.vue$/), views);
    if (!name) return;// 可能name为undefined
    routes.push({
      path: name === '/home' ? '/' : name,
      component: views[path]
    });
  }
}
importViews();

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
```

## pinia

```bash
pnpm install pinia
```

## nodejs

### express

```bash
express: pnpm install express
mysql: pnpm install mysql
cors: pnpm install cors
```

## antfu eslintconfig

- Single quotes, no semi  
   单引号，无半引号
- Auto fix for formatting (aimed to be used standalone **without** Prettier)  
   自动修复格式（旨在独立使用，无需 Prettier）
- Designed to work with TypeScript, Vue out-of-box  
   专为与 TypeScript、Vue 一起使用而设计，开箱即用
- Lint also for json, yaml, markdown  
   Lint 也适用于 json、yaml、markdown
- Sorted imports, dangling commas  
   已排序的导入，悬空逗号
- Reasonable defaults, best practices, only one-line of config  
   合理的默认值，最佳实践，只需一行配置
- **Style principle**: Minimal for reading, stable for diff  
   风格原则：阅读最小化，差异稳定

## [](https://github.com/antfu/eslint-config#usage)Usage  用法

### [](https://github.com/antfu/eslint-config#install)Install  安装

```shell
pnpm add -D eslint @antfu/eslint-config
```

### [](https://github.com/antfu/eslint-config#config-eslintrc)Config `.eslintrc`  配置  `.eslintrc`

```json
{
  "extends": "@antfu"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.  
> 通常您不需要  `.eslintignore` ，因为它已由预设提供。

### [](https://github.com/antfu/eslint-config#add-script-for-packagejson)Add script for package.json

为 package.json 添加脚本

For example:  例如：

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### [](https://github.com/antfu/eslint-config#vs-code-support-auto-fix)VS Code support (auto fix)

VS Code 支持（自动修复）

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
安装 VS Code ESLint 扩展

Add the following settings to your `settings.json`:  
将以下设置添加到您的  `settings.json`  中：

```js
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },

  // The following is optional.
  // It's better to put under project setting `.vscode/settings.json`
  // to avoid conflicts with working with different eslint configs
  // that does not support all formats.
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

### [](https://github.com/antfu/eslint-config#typescript-aware-rules)TypeScript Aware Rules TypeScript 感知规则

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env.  
当在项目根目录中找到  `tsconfig.eslint.json`  时，就会启用类型感知规则，这将在您的项目中引入一些更严格的规则。如果您想在项目根目录中没有  `tsconfig.eslint.json`  的情况下启用它，可以通过修改  `ESLINT_TSCONFIG` env 来更改 tsconfig 名称。

```js
// .eslintrc.js
const process = require("node:process");

process.env.ESLINT_TSCONFIG = "tsconfig.json";

module.exports = {
  extends: "@antfu",
};
```

### [](https://github.com/antfu/eslint-config#lint-staged)Lint Staged  

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:  
如果您想在每次提交之前应用 lint 和自动修复，您可以将以下内容添加到您的  `package.json`  中：

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

and then  进而

```shell
npm i -D lint-staged simple-git-hooks
```

## [](https://github.com/antfu/eslint-config#badge)Badge  徽章

If you enjoy this code style, and would like to mention it in your project, here is the badge you can use:  
如果您喜欢这种代码风格，并且想在您的项目中提及它，那么您可以使用以下徽章：

```md
[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)
```

[![code style](https://camo.githubusercontent.com/3e0d29fd4b1e4dc7afa6af9f7def74425cb43b39dfd8899b5135f46eb135dbb4/68747470733a2f2f616e7466752e6d652f62616467652d636f64652d7374796c652e737667)](https://github.com/antfu/eslint-config)

## [](https://github.com/antfu/eslint-config#faq)FAQ  常问问题

### [](https://github.com/antfu/eslint-config#prettier)Prettier?  更漂亮？

[Why I don't use Prettier  
为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier)

### [](https://github.com/antfu/eslint-config#how-to-lint-css)How to lint CSS?

如何对 CSS 进行 lint 处理？

This config does NOT lint CSS. I personally use [UnoCSS](https://github.com/unocss/unocss) so I don't write CSS. If you still prefer CSS, you can use [stylelint](https://stylelint.io/) for CSS linting.  
此配置不会 lint CSS。我个人使用 UnoCSS 所以我不写 CSS。如果您仍然喜欢 CSS，可以使用 stylelint 进行 CSS linting。

### [](https://github.com/antfu/eslint-config#i-prefer-xxx)I prefer XXX...  我更喜欢 XXX...

Sure, you can override the rules in your `.eslintrc` file.  
当然，您可以覆盖  `.eslintrc`  文件中的规则。

```js
{
  "extends": "@antfu",
  "rules": {
    // your rules...
  }
}
```

Or you can always fork this repo and make your own.  
或者您可以随时分叉此存储库并创建您自己的存储库。

## [](https://github.com/antfu/eslint-config#check-also)Check Also  另请检查

- [antfu/dotfiles](https://github.com/antfu/dotfiles) - My dotfiles  
   antfu/dotfiles - 我的点文件
- [antfu/vscode-settings](https://github.com/antfu/vscode-settings) - My VS Code settings  
   antfu/vscode-settings - 我的 VS Code 设置
- [antfu/ts-starter](https://github.com/antfu/ts-starter) - My starter template for TypeScript library  
   antfu/ts-starter - 我的 TypeScript 库入门模板
- [antfu/vitesse](https://github.com/antfu/vitesse) - My starter template for Vue & Vite app  
   antfu/vitesse - 我的 Vue 和 Vite 应用程序的入门模板


## reset.scss
```scss
/**
 * Modern CSS Reset Tweaks
 * ================================================== */
html {
  -webkit-text-size-adjust: 100%;

  &:focus-within {
    scroll-behavior: smooth;
  }
}

body {
  text-size-adjust: 100%;
  position: relative;

  width: 100%;
  min-height: 100vh;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeSpeed;
}


/* Box sizing normalization */
*,
::after,
::before {
  box-sizing: border-box;
}


/* Elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}


/**
 * CSS Reset Tweaks
 *
 * http://meyerweb.com/eric/tools/css/reset/
 * v2.0-modified | 20110126
 * License: none (public domain)
 */

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  font-size: 100%;
  font: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

/* make sure to set some focus styles for accessibility */
:focus {
  outline: 0;
}

/* HTML5 display-role reset for older browsers */
main,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;

  &:before,
  &:after {
    content: '';
    content: none;
  }
}

/**
 * Input Reset
 */
input:required,
input {
  box-shadow: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type=search] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

input {
  &:focus {
    outline: none;
  }
}

/**
 * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.
 */
audio,
canvas,
video {
  display: inline-block;
  max-width: 100%;
}

/**
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */
audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
 */
[hidden] {
  display: none;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */
a:active,
a:hover {
  outline: none;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
  height: auto;
}

/* Make pictures easier to work with */
picture {
  display: inline-block;
}

/**
 * Address Firefox 3+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */
button,
input {
  line-height: normal;
}

/**
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.
 * Correct `select` style inheritance in Firefox 4+ and Opera.
 */

button,
select {
  text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
  border: 0;
  background: transparent;
}

/**
 * Re-set default cursor for disabled elements.
 */
button[disabled],
html input[disabled] {
  cursor: default;
}

[disabled] {
  pointer-events: none;
}

/**
 * 1. Address box sizing set to content-box in IE 8/9.
 */
input[type="checkbox"],
input[type="radio"] {
  padding: 0;
}

/**
 * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.
 * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome
 *    (include `-moz` to future-proof).
 */
input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Remove inner padding and border in Firefox 3+.
 */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

button {
  border: 0;
  background: transparent;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

/**
 * Remove most spacing between table cells.
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}


/**
 * Based on normalize.css v8.0.1
 * github.com/necolas/normalize.css
 */
hr {
  box-sizing: content-box;
  overflow: visible;
  background: #000;
  border: 0;
  height: 1px;
  line-height: 0;
  margin: 0;
  padding: 0;
  page-break-after: always;
  width: 100%;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 */
pre {
  font-family: monospace, monospace;
  font-size: 100%;
}

/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  text-decoration: none;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 75%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -5px;
}

sup {
  top: -5px;
}

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1;
  margin: 0;
  padding: 0;
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
  outline: 0;
}


legend {
  color: inherit;
  white-space: normal;

  display: block;
  border: 0;
  max-width: 100%;
  width: 100%;
}

fieldset {
  min-width: 0;
}

body:not(:-moz-handler-blocked) fieldset {
  display: block;
}


/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}


/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}


/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Misc
 * ========================================================================== */

template {
  display: none;
}
```