import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as p,c as o,b as n,d as s,e,f as i}from"./app-xEYoAD2G.js";const c={},u=i(`<h2 id="新建-vite-项目" tabindex="-1"><a class="header-anchor" href="#新建-vite-项目" aria-hidden="true">#</a> 新建 vite 项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> create vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="新建-vue-项目" tabindex="-1"><a class="header-anchor" href="#新建-vue-项目" aria-hidden="true">#</a> 新建 vue 项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-element-plus" tabindex="-1"><a class="header-anchor" href="#安装-element-plus" aria-hidden="true">#</a> 安装 element plus</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> element-plus <span class="token parameter variable">--save</span>
<span class="token function">pnpm</span> <span class="token function">install</span> element-plus
<span class="token function">import</span> ElementPlus from <span class="token string">&#39;element-plus&#39;</span>
<span class="token function">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>
APP.use<span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-vue-router" tabindex="-1"><a class="header-anchor" href="#安装-vue-router" aria-hidden="true">#</a> 安装 vue-router</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>自动注册路由</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">{</span> createRouter, createWebHashHistory, RouteRecordRaw <span class="token punctuation">}</span> from <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>

const routes: RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
// 动态的注册路由，不用每次手动添加路由
<span class="token keyword">function</span> <span class="token function-name function">importViews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  const views <span class="token operator">=</span> import.meta.glob<span class="token punctuation">(</span><span class="token string">&#39;../views/*.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>const path <span class="token keyword">in</span> views<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    const name <span class="token operator">=</span> path.match<span class="token punctuation">(</span>/<span class="token punctuation">\\</span>.<span class="token punctuation">\\</span>/views<span class="token punctuation">(</span>.*<span class="token punctuation">)</span><span class="token punctuation">\\</span>.vue$/<span class="token punctuation">)</span>?.<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>?.toLowerCase<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    // console.log<span class="token punctuation">(</span>path.match<span class="token punctuation">(</span>/<span class="token punctuation">\\</span>.<span class="token punctuation">\\</span>/views<span class="token punctuation">(</span>.*<span class="token punctuation">)</span><span class="token punctuation">\\</span>.vue$/<span class="token punctuation">)</span>, views<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>name<span class="token punctuation">)</span> <span class="token builtin class-name">return</span><span class="token punctuation">;</span>// 可能name为undefined
    routes.push<span class="token punctuation">(</span><span class="token punctuation">{</span>
      path: name <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;/home&#39;</span> ? <span class="token string">&#39;/&#39;</span> <span class="token builtin class-name">:</span> name,
      component: views<span class="token punctuation">[</span>path<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
importViews<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

const router <span class="token operator">=</span> createRouter<span class="token punctuation">(</span><span class="token punctuation">{</span>
  history: createWebHashHistory<span class="token punctuation">(</span><span class="token punctuation">)</span>,
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin class-name">export</span> default router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pinia" tabindex="-1"><a class="header-anchor" href="#pinia" aria-hidden="true">#</a> pinia</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> nodejs</h2><h3 id="express" tabindex="-1"><a class="header-anchor" href="#express" aria-hidden="true">#</a> express</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>express: <span class="token function">pnpm</span> <span class="token function">install</span> express
mysql: <span class="token function">pnpm</span> <span class="token function">install</span> mysql
cors: <span class="token function">pnpm</span> <span class="token function">install</span> cors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="antfu-eslintconfig" tabindex="-1"><a class="header-anchor" href="#antfu-eslintconfig" aria-hidden="true">#</a> antfu eslintconfig</h2><ul><li>Single quotes, no semi<br> 单引号，无半引号</li><li>Auto fix for formatting (aimed to be used standalone <strong>without</strong> Prettier)<br> 自动修复格式（旨在独立使用，无需 Prettier）</li><li>Designed to work with TypeScript, Vue out-of-box<br> 专为与 TypeScript、Vue 一起使用而设计，开箱即用</li><li>Lint also for json, yaml, markdown<br> Lint 也适用于 json、yaml、markdown</li><li>Sorted imports, dangling commas<br> 已排序的导入，悬空逗号</li><li>Reasonable defaults, best practices, only one-line of config<br> 合理的默认值，最佳实践，只需一行配置</li><li><strong>Style principle</strong>: Minimal for reading, stable for diff<br> 风格原则：阅读最小化，差异稳定</li></ul>`,17),r={id:"usage-用法",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#usage-用法","aria-hidden":"true"},"#",-1),v={href:"https://github.com/antfu/eslint-config#usage",target:"_blank",rel:"noopener noreferrer"},m={id:"install-安装",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#install-安装","aria-hidden":"true"},"#",-1),k={href:"https://github.com/antfu/eslint-config#install",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> eslint @antfu/eslint-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),f={id:"config-eslintrc-配置-eslintrc",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#config-eslintrc-配置-eslintrc","aria-hidden":"true"},"#",-1),y={href:"https://github.com/antfu/eslint-config#config-eslintrc",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,".eslintrc",-1),x=n("code",null,".eslintrc",-1),q=i(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@antfu&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>You don&#39;t need <code>.eslintignore</code> normally as it has been provided by the preset.<br> 通常您不需要  <code>.eslintignore</code> ，因为它已由预设提供。</p></blockquote>`,2),w={id:"add-script-for-package-json",tabindex:"-1"},S=n("a",{class:"header-anchor",href:"#add-script-for-package-json","aria-hidden":"true"},"#",-1),j={href:"https://github.com/antfu/eslint-config#add-script-for-packagejson",target:"_blank",rel:"noopener noreferrer"},C=i(`<p>为 package.json 添加脚本</p><p>For example:  例如：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint .&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint . --fix&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),z={id:"vs-code-support-auto-fix",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#vs-code-support-auto-fix","aria-hidden":"true"},"#",-1),R={href:"https://github.com/antfu/eslint-config#vs-code-support-auto-fix",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"VS Code 支持（自动修复）",-1),A={href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"},T=n("br",null,null,-1),V=i(`<p>Add the following settings to your <code>settings.json</code>:<br> 将以下设置添加到您的  <code>settings.json</code>  中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;prettier.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;source.organizeImports&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// The following is optional.</span>
  <span class="token comment">// It&#39;s better to put under project setting \`.vscode/settings.json\`</span>
  <span class="token comment">// to avoid conflicts with working with different eslint configs</span>
  <span class="token comment">// that does not support all formats.</span>
  <span class="token string-property property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;markdown&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;yaml&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),F={id:"typescript-aware-rules-typescript-感知规则",tabindex:"-1"},O=n("a",{class:"header-anchor",href:"#typescript-aware-rules-typescript-感知规则","aria-hidden":"true"},"#",-1),L={href:"https://github.com/antfu/eslint-config#typescript-aware-rules",target:"_blank",rel:"noopener noreferrer"},N=i(`<p>Type aware rules are enabled when a <code>tsconfig.eslint.json</code> is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no <code>tsconfig.eslint.json</code> in the project root, you can change tsconfig name by modifying <code>ESLINT_TSCONFIG</code> env.<br> 当在项目根目录中找到  <code>tsconfig.eslint.json</code>  时，就会启用类型感知规则，这将在您的项目中引入一些更严格的规则。如果您想在项目根目录中没有  <code>tsconfig.eslint.json</code>  的情况下启用它，可以通过修改  <code>ESLINT_TSCONFIG</code> env 来更改 tsconfig 名称。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
<span class="token keyword">const</span> process <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;node:process&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ESLINT_TSCONFIG</span> <span class="token operator">=</span> <span class="token string">&quot;tsconfig.json&quot;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&quot;@antfu&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),P={id:"lint-staged",tabindex:"-1"},M=n("a",{class:"header-anchor",href:"#lint-staged","aria-hidden":"true"},"#",-1),X={href:"https://github.com/antfu/eslint-config#lint-staged",target:"_blank",rel:"noopener noreferrer"},B=i(`<p>If you want to apply lint and auto-fix before every commit, you can add the following to your <code>package.json</code>:<br> 如果您想在每次提交之前应用 lint 和自动修复，您可以将以下内容添加到您的  <code>package.json</code>  中：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;simple-git-hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm lint-staged&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --fix&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and then  进而</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> lint-staged simple-git-hooks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),H={id:"badge-徽章",tabindex:"-1"},U=n("a",{class:"header-anchor",href:"#badge-徽章","aria-hidden":"true"},"#",-1),D={href:"https://github.com/antfu/eslint-config#badge",target:"_blank",rel:"noopener noreferrer"},G=i(`<p>If you enjoy this code style, and would like to mention it in your project, here is the badge you can use:<br> 如果您喜欢这种代码风格，并且想在您的项目中提及它，那么您可以使用以下徽章：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">![code style</span>](<span class="token url">https://antfu.me/badge-code-style.svg</span>)</span>](https://github.com/antfu/eslint-config)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),W={href:"https://github.com/antfu/eslint-config",target:"_blank",rel:"noopener noreferrer"},$=n("img",{src:"https://camo.githubusercontent.com/3e0d29fd4b1e4dc7afa6af9f7def74425cb43b39dfd8899b5135f46eb135dbb4/68747470733a2f2f616e7466752e6d652f62616467652d636f64652d7374796c652e737667",alt:"code style",tabindex:"0",loading:"lazy"},null,-1),Q=n("figcaption",null,"code style",-1),Y={id:"faq-常问问题",tabindex:"-1"},J=n("a",{class:"header-anchor",href:"#faq-常问问题","aria-hidden":"true"},"#",-1),K={href:"https://github.com/antfu/eslint-config#faq",target:"_blank",rel:"noopener noreferrer"},Z={id:"prettier-更漂亮",tabindex:"-1"},nn=n("a",{class:"header-anchor",href:"#prettier-更漂亮","aria-hidden":"true"},"#",-1),sn={href:"https://github.com/antfu/eslint-config#prettier",target:"_blank",rel:"noopener noreferrer"},an={href:"https://antfu.me/posts/why-not-prettier",target:"_blank",rel:"noopener noreferrer"},en=n("br",null,null,-1),tn={id:"how-to-lint-css",tabindex:"-1"},ln=n("a",{class:"header-anchor",href:"#how-to-lint-css","aria-hidden":"true"},"#",-1),pn={href:"https://github.com/antfu/eslint-config#how-to-lint-css",target:"_blank",rel:"noopener noreferrer"},on=n("p",null,"如何对 CSS 进行 lint 处理？",-1),cn={href:"https://github.com/unocss/unocss",target:"_blank",rel:"noopener noreferrer"},un={href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"},rn=n("br",null,null,-1),dn={id:"i-prefer-xxx-我更喜欢-xxx",tabindex:"-1"},vn=n("a",{class:"header-anchor",href:"#i-prefer-xxx-我更喜欢-xxx","aria-hidden":"true"},"#",-1),mn={href:"https://github.com/antfu/eslint-config#i-prefer-xxx",target:"_blank",rel:"noopener noreferrer"},bn=i(`<p>Sure, you can override the rules in your <code>.eslintrc</code> file.<br> 当然，您可以覆盖  <code>.eslintrc</code>  文件中的规则。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@antfu&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// your rules...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or you can always fork this repo and make your own.<br> 或者您可以随时分叉此存储库并创建您自己的存储库。</p>`,3),kn={id:"check-also-另请检查",tabindex:"-1"},hn=n("a",{class:"header-anchor",href:"#check-also-另请检查","aria-hidden":"true"},"#",-1),fn={href:"https://github.com/antfu/eslint-config#check-also",target:"_blank",rel:"noopener noreferrer"},gn={href:"https://github.com/antfu/dotfiles",target:"_blank",rel:"noopener noreferrer"},yn=n("br",null,null,-1),_n={href:"https://github.com/antfu/vscode-settings",target:"_blank",rel:"noopener noreferrer"},xn=n("br",null,null,-1),qn={href:"https://github.com/antfu/ts-starter",target:"_blank",rel:"noopener noreferrer"},wn=n("br",null,null,-1),Sn={href:"https://github.com/antfu/vitesse",target:"_blank",rel:"noopener noreferrer"},jn=n("br",null,null,-1),Cn=i(`<h2 id="reset-scss" tabindex="-1"><a class="header-anchor" href="#reset-scss" aria-hidden="true">#</a> reset.scss</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/**
 * Modern CSS Reset Tweaks
 * ================================================== */</span>
<span class="token selector">html </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:focus-within </span><span class="token punctuation">{</span>
    <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>

  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
  <span class="token property">text-rendering</span><span class="token punctuation">:</span> optimizeSpeed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/* Box sizing normalization */</span>
<span class="token selector">*,
::after,
::before </span><span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/* Elements that don&#39;t have a class get default styles */</span>
<span class="token property">a</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>[class]<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration-skip-ink</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/**
 * CSS Reset Tweaks
 *
 * http://meyerweb.com/eric/tools/css/reset/
 * v2.0-modified | 20110126
 * License: none (public domain)
 */</span>

<span class="token selector">html,
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
video </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* make sure to set some focus styles for accessibility */</span>
<span class="token selector">:focus </span><span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* HTML5 display-role reset for older browsers */</span>
<span class="token selector">main,
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
section </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ol,
ul </span><span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">blockquote,
q </span><span class="token punctuation">{</span>
  <span class="token property">quotes</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:before,
  <span class="token parent important">&amp;</span>:after </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Input Reset
 */</span>
<span class="token selector">input:required,
input </span><span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0 0 0 30px white inset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input[type=search] </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
  <span class="token property">-moz-box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">textarea </span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
  <span class="token property">resize</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:focus </span><span class="token punctuation">{</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Correct \`inline-block\` display not defined in IE 6/7/8/9 and Firefox 3.
 */</span>
<span class="token selector">audio,
canvas,
video </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Prevent modern browsers from displaying \`audio\` without controls.
 * Remove excess height in iOS 5 devices.
 */</span>
<span class="token property">audio</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>[controls]<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
 */</span>
<span class="token selector">[hidden] </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */</span>
<span class="token selector">a:active,
a:hover </span><span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Make images easier to work with */</span>
<span class="token selector">img </span><span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Make pictures easier to work with */</span>
<span class="token selector">picture </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Address Firefox 3+ setting \`line-height\` on \`input\` using \`!important\` in
 * the UA stylesheet.
 */</span>
<span class="token selector">button,
input </span><span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Address inconsistent \`text-transform\` inheritance for \`button\` and \`select\`.
 * All other form control elements do not inherit \`text-transform\` values.
 * Correct \`button\` style inheritance in Chrome, Safari 5+, and IE 6+.
 * Correct \`select\` style inheritance in Firefox 4+ and Opera.
 */</span>

<span class="token selector">button,
select </span><span class="token punctuation">{</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">button,
html input[type=&quot;button&quot;],
input[type=&quot;reset&quot;],
input[type=&quot;submit&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> button<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Re-set default cursor for disabled elements.
 */</span>
<span class="token selector">button[disabled],
html input[disabled] </span><span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> default<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">[disabled] </span><span class="token punctuation">{</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Address box sizing set to content-box in IE 8/9.
 */</span>
<span class="token selector">input[type=&quot;checkbox&quot;],
input[type=&quot;radio&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Address \`appearance\` set to \`searchfield\` in Safari 5 and Chrome.
 * 2. Address \`box-sizing\` set to \`border-box\` in Safari 5 and Chrome
 *    (include \`-moz\` to future-proof).
 */</span>
<span class="token selector">input[type=&quot;search&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> textfield<span class="token punctuation">;</span>
  <span class="token property">-moz-box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */</span>
<span class="token selector">input[type=&quot;search&quot;]::-webkit-search-cancel-button,
input[type=&quot;search&quot;]::-webkit-search-decoration </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove inner padding and border in Firefox 3+.
 */</span>
<span class="token selector">button::-moz-focus-inner,
input::-moz-focus-inner </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">button </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">textarea </span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
  <span class="token property">resize</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove most spacing between table cells.
 */</span>
<span class="token selector">table </span><span class="token punctuation">{</span>
  <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
  <span class="token property">border-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">text-indent</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/**
 * Based on normalize.css v8.0.1
 * github.com/necolas/normalize.css
 */</span>
<span class="token selector">hr </span><span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">page-break-after</span><span class="token punctuation">:</span> always<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 */</span>
<span class="token selector">pre </span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> monospace<span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove the gray background on active links in IE 10.
 */</span>
<span class="token selector">a </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */</span>
<span class="token selector">abbr[title] </span><span class="token punctuation">{</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">code,
kbd,
pre,
samp </span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> monospace<span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add the correct font size in all browsers.
 */</span>
<span class="token selector">small </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */</span>
<span class="token selector">sub,
sup </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">sub </span><span class="token punctuation">{</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> -5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">sup </span><span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */</span>
<span class="token selector">button,
input,
optgroup,
select,
textarea </span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */</span>
<span class="token selector">button,
input </span><span class="token punctuation">{</span>
  <span class="token comment">/* 1 */</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */</span>
<span class="token selector">button,
select </span><span class="token punctuation">{</span>
  <span class="token comment">/* 1 */</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Correct the inability to style clickable types in iOS and Safari.
 */</span>
<span class="token selector">button,
[type=&quot;button&quot;],
[type=&quot;reset&quot;],
[type=&quot;submit&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> button<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove the inner border and padding in Firefox.
 */</span>

<span class="token selector">button::-moz-focus-inner,
[type=&quot;button&quot;]::-moz-focus-inner,
[type=&quot;reset&quot;]::-moz-focus-inner,
[type=&quot;submit&quot;]::-moz-focus-inner </span><span class="token punctuation">{</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">legend </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>

  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">fieldset </span><span class="token punctuation">{</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token property">body</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token punctuation">:</span>-moz-handler-blocked<span class="token punctuation">)</span> <span class="token selector">fieldset </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */</span>
<span class="token selector">progress </span><span class="token punctuation">{</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */</span>
<span class="token selector">[type=&quot;number&quot;]::-webkit-inner-spin-button,
[type=&quot;number&quot;]::-webkit-outer-spin-button </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */</span>
<span class="token selector">[type=&quot;search&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> textfield<span class="token punctuation">;</span>
  <span class="token comment">/* 1 */</span>
  <span class="token property">outline-offset</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
  <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */</span>
<span class="token selector">[type=&quot;search&quot;]::-webkit-search-decoration </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */</span>
<span class="token selector">::-webkit-file-upload-button </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> button<span class="token punctuation">;</span>
  <span class="token comment">/* 1 */</span>
  <span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token comment">/* 2 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Interactive
   ========================================================================== */</span>

<span class="token comment">/*
 * Add the correct display in all browsers.
 */</span>
<span class="token selector">summary </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> list-item<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * Misc
 * ========================================================================== */</span>

<span class="token selector">template </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function zn(In,Rn){const a=l("ExternalLinkIcon");return p(),o("div",null,[u,n("h2",r,[d,s(),n("a",v,[e(a)]),s("Usage  用法")]),n("h3",m,[b,s(),n("a",k,[e(a)]),s("Install  安装")]),h,n("h3",f,[g,s(),n("a",y,[e(a)]),s("Config "),_,s("  配置  "),x]),q,n("h3",w,[S,s(),n("a",j,[e(a)]),s("Add script for package.json")]),C,n("h3",z,[I,s(),n("a",R,[e(a)]),s("VS Code support (auto fix)")]),E,n("p",null,[s("Install "),n("a",A,[s("VS Code ESLint extension"),e(a)]),T,s(" 安装 VS Code ESLint 扩展")]),V,n("h3",F,[O,s(),n("a",L,[e(a)]),s("TypeScript Aware Rules TypeScript 感知规则")]),N,n("h3",P,[M,s(),n("a",X,[e(a)]),s("Lint Staged")]),B,n("h2",H,[U,s(),n("a",D,[e(a)]),s("Badge  徽章")]),G,n("figure",null,[n("a",W,[$,e(a)]),Q]),n("h2",Y,[J,s(),n("a",K,[e(a)]),s("FAQ  常问问题")]),n("h3",Z,[nn,s(),n("a",sn,[e(a)]),s("Prettier?  更漂亮？")]),n("p",null,[n("a",an,[s("Why I don't use Prettier"),en,s(" 为什么我不使用 Prettier"),e(a)])]),n("h3",tn,[ln,s(),n("a",pn,[e(a)]),s("How to lint CSS?")]),on,n("p",null,[s("This config does NOT lint CSS. I personally use "),n("a",cn,[s("UnoCSS"),e(a)]),s(" so I don't write CSS. If you still prefer CSS, you can use "),n("a",un,[s("stylelint"),e(a)]),s(" for CSS linting."),rn,s(" 此配置不会 lint CSS。我个人使用 UnoCSS 所以我不写 CSS。如果您仍然喜欢 CSS，可以使用 stylelint 进行 CSS linting。")]),n("h3",dn,[vn,s(),n("a",mn,[e(a)]),s("I prefer XXX...  我更喜欢 XXX...")]),bn,n("h2",kn,[hn,s(),n("a",fn,[e(a)]),s("Check Also  另请检查")]),n("ul",null,[n("li",null,[n("a",gn,[s("antfu/dotfiles"),e(a)]),s(" - My dotfiles"),yn,s(" antfu/dotfiles - 我的点文件")]),n("li",null,[n("a",_n,[s("antfu/vscode-settings"),e(a)]),s(" - My VS Code settings"),xn,s(" antfu/vscode-settings - 我的 VS Code 设置")]),n("li",null,[n("a",qn,[s("antfu/ts-starter"),e(a)]),s(" - My starter template for TypeScript library"),wn,s(" antfu/ts-starter - 我的 TypeScript 库入门模板")]),n("li",null,[n("a",Sn,[s("antfu/vitesse"),e(a)]),s(" - My starter template for Vue & Vite app"),jn,s(" antfu/vitesse - 我的 Vue 和 Vite 应用程序的入门模板")])]),Cn])}const Tn=t(c,[["render",zn],["__file","构建项目常用npm.html.vue"]]);export{Tn as default};
