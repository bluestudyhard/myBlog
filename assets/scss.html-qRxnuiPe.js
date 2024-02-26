import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-xEYoAD2G.js";const p={},t=e(`<h2 id="使用-scss-完成主题切换" tabindex="-1"><a class="header-anchor" href="#使用-scss-完成主题切换" aria-hidden="true">#</a> 使用 scss 完成主题切换</h2><h3 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> @mixin</h3><p>@mixin 可以理解为一个可以复用的 scss 组件，可以传递参数<br> 然后可以使用@include 来引用他的值，也可以使用@content 来当做 slot，动态插入<br> 简单的示例</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> main_<span class="token function">button</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$bg_color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$bg_color</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 在要用的地方使用@include引用</span>
<span class="token selector">.example_button </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> main_<span class="token function">button</span><span class="token punctuation">(</span>#586c78<span class="token punctuation">,</span> #7499fecd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 解析结果</span>
<span class="token selector">.example_button </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #7499fecd<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #586c78<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用@content</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> main_<span class="token function">button</span><span class="token punctuation">(</span><span class="token variable">$bg_color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$bg_color</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token keyword">@content</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 动态插入值</span>
<span class="token selector">.example_button </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> main_<span class="token function">button</span><span class="token punctuation">(</span>#7499fecd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #ffff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 解析结果</span>
<span class="token selector">.example_button </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$bg_color</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><p>scss 可以生成 map 变量，类似于 js 中的对象，可以通过 key 获取 value</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-manage</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">website-item-text-title</span><span class="token punctuation">:</span> #586c78<span class="token punctuation">,</span>
  <span class="token property">website-item-text-desc</span><span class="token punctuation">:</span> #94a3b8<span class="token punctuation">,</span>
  <span class="token property">website-item-boxshadow</span><span class="token punctuation">:</span> 1px 3px 6px 2px #c7dff53d<span class="token punctuation">,</span>
  <span class="token property">website-item-border-bg</span><span class="token punctuation">:</span> #7499fecd<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后可以使用 get-map()获取</p><div class="hint-container tip"><p class="hint-container-title">注意嗷这里的话是要用$map $key 的形式的</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$map</span></span><span class="token punctuation">:</span> <span class="token variable">$theme-manage</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$key</span></span><span class="token punctuation">:</span> website-item-border-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="each" tabindex="-1"><a class="header-anchor" href="#each" aria-hidden="true">#</a> @each</h3></div>`,11),c=[t];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","scss.html.vue"]]);export{d as default};
