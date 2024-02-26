<template><div><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h2>
<p><img src="@source/frontend/vue/images/image.png" alt="Alt text" loading="lazy"><br>
<img src="@source/frontend/vue/images/image1.png" alt="Alt text" loading="lazy"></p>
<h3 id="如果在组件外使用-pinia-在-vue-之外-的方法" tabindex="-1"><a class="header-anchor" href="#如果在组件外使用-pinia-在-vue-之外-的方法" aria-hidden="true">#</a> 如果在组件外使用 pinia(在.vue 之外)的方法</h3>
<p><a href="https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html" target="_blank" rel="noopener noreferrer">https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html<ExternalLinkIcon/></a><br>
这里会报一个通常的错</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>getActivePinia was called with no active Pinia. Did you forget to <span class="token function">install</span> pinia? <span class="token comment">#971</span>
调用 getActivePinia 时没有激活 Pinia。你是不是忘记安装pinia了？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 github 上搜索后就找到相关的解决方法了，官方文档也指出了怎么处理</p>
<p>简单来说就是，把 useStore 在函数里面使用就可以了，一般也是用于路由守卫或者请求拦截器<br>
<img src="@source/frontend/vue/images/20230919165929.png" alt="" loading="lazy"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">userStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> token <span class="token operator">=</span> useUserStore<span class="token punctuation">.</span>token<span class="token punctuation">;</span>
  <span class="token comment">// 判断是否登录</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 未登录</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">"/login"</span><span class="token punctuation">)</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没登录的话怎么都是指向login</span>
    <span class="token keyword">else</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 判断是否有权限</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h2>
<p>actions 就是仓库自带的一些方法，也就是仓库自带的函数，一般使用 actions 的时候都是在一开始我就需要一些数据时，由仓库自己调用，然后获取<br>
比如说，开局我要发送登录请求，或者开局我登录以后我要获取用户信息，这个时候就可以考虑使用 actions</p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<h2 id="各种使用tips" tabindex="-1"><a class="header-anchor" href="#各种使用tips" aria-hidden="true">#</a> 各种使用tips</h2>
<h3 id="关于响应式数据的问题" tabindex="-1"><a class="header-anchor" href="#关于响应式数据的问题" aria-hidden="true">#</a> 关于响应式数据的问题</h3>
<p>如果在组件内使用store的话，用storeTorefs调用state，然后在template里面更新数据是会响应式更新的<br>
<img src="@source/frontend/vue/images/20231124205129.png" alt="" loading="lazy"></p>
<p>然后调用里面的get函数的话，也是可以响应式更新的<br>
<img src="@source/frontend/vue/images/20231124205202.png" alt="" loading="lazy"><br>
<img src="@source/frontend/vue/images/20231124205055.png" alt="" loading="lazy"></p>
<p>但是如果隔了两层的话就不行了，就是如果在actions里面再调用get函数的话，就不会响应式更新了</p>
<p><img src="@source/frontend/vue/images/20231124205324.png" alt="" loading="lazy"><br>
这样添加了以后页面数据是没有更新的</p>
</div></template>


