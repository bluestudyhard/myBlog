<template><div><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h2>
<h3 id="css-长度单位" tabindex="-1"><a class="header-anchor" href="#css-长度单位" aria-hidden="true">#</a> css 长度单位</h3>
<h4 id="em-rem-px-等的区别" tabindex="-1"><a class="header-anchor" href="#em-rem-px-等的区别" aria-hidden="true">#</a> em rem px 等的区别</h4>
<p>em 是相对长度单位，其值并不固定，一般会继承父级元素的字体大小。任意浏览器的默认字体高都是 16px，所有未经调整的浏览器都符合： 1em=16px。但如果父级设置了其他字体高度，那此时的 1em 就等于父级设置好的字体高度。</p>
<h2 id="实操" tabindex="-1"><a class="header-anchor" href="#实操" aria-hidden="true">#</a> 实操</h2>
<h3 id="解决响应式适配时-页面都已经-overflow-hidden-了还是会出现滚动条和下方空白区的问题" tabindex="-1"><a class="header-anchor" href="#解决响应式适配时-页面都已经-overflow-hidden-了还是会出现滚动条和下方空白区的问题" aria-hidden="true">#</a> 解决响应式适配时，页面都已经 overflow:hidden 了还是会出现滚动条和下方空白区的问题</h3>
<p>这其实应该算是手机的锅，视图区域超出了 html 的区域，这个时候只要在 index.html 上添加</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span>
  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就 OK 了</p>
</div></template>


