<template><div><h2 id="createapp-​" tabindex="-1"><a class="header-anchor" href="#createapp-​" aria-hidden="true">#</a> createApp()<a href="https://cn.vuejs.org/api/application.html#createapp" target="_blank" rel="noopener noreferrer">​<ExternalLinkIcon/></a></h2>
<h3 id="创建一个应用实例" tabindex="-1"><a class="header-anchor" href="#创建一个应用实例" aria-hidden="true">#</a> 创建一个应用实例</h3>
<p><strong>类型</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>  <span class="token keyword">function</span> createApp<span class="token punctuation">(</span>rootComponent: Component, rootProps?: object<span class="token punctuation">)</span>: App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>详细信息</strong><br>
第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props。<br>
<strong>示例</strong></p>
<ul>
<li>可以直接内联根组件：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>  <span class="token function">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> from <span class="token string">'vue'</span>

  const app <span class="token operator">=</span> createApp<span class="token punctuation">(</span><span class="token punctuation">{</span>
    /* 根组件选项 */
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>也可以使用从别处导入的组件：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token function">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> from <span class="token string">'vue'</span>
 <span class="token function">import</span> App from <span class="token string">'./App.vue'</span>

 const app <span class="token operator">=</span> createApp<span class="token punctuation">(</span>App<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="挂载应用​" tabindex="-1"><a class="header-anchor" href="#挂载应用​" aria-hidden="true">#</a> 挂载应用<a href="https://cn.vuejs.org/guide/essentials/application.html#mounting-the-app" target="_blank" rel="noopener noreferrer">​<ExternalLinkIcon/></a></h4>
<p>应用实例必须在调用了  <code v-pre>.mount()</code>  方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：</p>
<p>html</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div id="app">&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>js</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>app.mount('#app')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>应用根组件的内容将会被渲染在容器元素里面。容器元素自己将<strong>不会</strong>被视为应用的一部分。</p>
<p><code v-pre>.mount()</code>  方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。</p>
<h4 id="dom-中的根组件模板​" tabindex="-1"><a class="header-anchor" href="#dom-中的根组件模板​" aria-hidden="true">#</a> DOM 中的根组件模板<a href="https://cn.vuejs.org/guide/essentials/application.html#in-dom-root-component-template" target="_blank" rel="noopener noreferrer">​<ExternalLinkIcon/></a></h4>
<p>根组件的模板通常是组件本身的一部分，但也可以直接通过在挂载容器内编写模板来单独提供：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>count++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当根组件没有设置  <code v-pre>template</code>  选项时，Vue 将自动使用容器的  <code v-pre>innerHTML</code>  作为模板。</p>
<p>DOM 内模板通常用于<a href="https://cn.vuejs.org/guide/quick-start.html#using-vue-from-cdn" target="_blank" rel="noopener noreferrer">无构建步骤<ExternalLinkIcon/></a>的 Vue 应用程序。它们也可以与服务器端框架一起使用，其中根模板可能是由服务器动态生成的。</p>
<h3 id="应用配置​" tabindex="-1"><a class="header-anchor" href="#应用配置​" aria-hidden="true">#</a> 应用配置<a href="https://cn.vuejs.org/guide/essentials/application.html#app-configurations" target="_blank" rel="noopener noreferrer">​<ExternalLinkIcon/></a></h3>
<p>应用实例会暴露一个  <code v-pre>.config</code>  对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，用来捕获所有子组件上的错误：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">/* 处理错误 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'TodoDeleteButton'</span><span class="token punctuation">,</span> TodoDeleteButton<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这使得  <code v-pre>TodoDeleteButton</code>  在应用的任何地方都是可用的。我们会在指南的后续章节中讨论关于组件和其他资源的注册。你也可以在  <a href="https://cn.vuejs.org/api/application.html" target="_blank" rel="noopener noreferrer">API 参考<ExternalLinkIcon/></a>中浏览应用实例 API 的完整列表。</p>
<p>确保在挂载应用实例之前完成所有应用配置！</p>
<h3 id="多个应用实例​" tabindex="-1"><a class="header-anchor" href="#多个应用实例​" aria-hidden="true">#</a> 多个应用实例<a href="https://cn.vuejs.org/guide/essentials/application.html#multiple-application-instances" target="_blank" rel="noopener noreferrer">​<ExternalLinkIcon/></a></h3>
<p>应用实例并不只限于一个。<code v-pre>createApp</code> API 允许你在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app1 <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app1<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#container-1'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app2 <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app2<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#container-2'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式基础" tabindex="-1"><a class="header-anchor" href="#响应式基础" aria-hidden="true">#</a> 响应式基础</h2>
<h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h3>
<p>ref 其实可以理解为带了响应式的值，他的原型大概为</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">function</span> ref<span class="token punctuation">(</span>value<span class="token punctuation">)</span>:<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> value:<span class="token operator">&lt;</span>T<span class="token operator">></span>.value
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以使用 ref() 函数来声明响应式状态<br>
然后我们平时的使用其实就是相当于直接拿 ref 来为我们的值赋值就好了，在<code v-pre>setup</code>中使用的话，我们需要用.value 来获取里面的值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>const foo <span class="token operator">=</span> ref<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
console.log<span class="token punctuation">(</span>foo.value<span class="token punctuation">)</span> // <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 ref 的场景就是当我们需要获取响应式的值时，才调用，有一些常量我们还是用以前的声明方法。具体的响应式原理请看<RouterLink to="/frontend/vue/vue%E8%BF%9B%E9%98%B6.html">vue 进阶</RouterLink></p>
<h4 id="在-ts-中为-ref-标注类型" tabindex="-1"><a class="header-anchor" href="#在-ts-中为-ref-标注类型" aria-hidden="true">#</a> 在 TS 中为 ref 标注类型</h4>
<p>ref 会根据初始化时的值推导其类型：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token comment">// 推导出的类型：Ref&lt;number></span>
<span class="token keyword">const</span> year <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2020</span><span class="token punctuation">)</span>

<span class="token comment">// => TS Error: Type 'string' is not assignable to type 'number'.</span>
year<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'2020'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时我们可能想为 ref 内的值指定一个更复杂的类型，可以通过使用  <code v-pre>Ref</code>  这个类型：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> Ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> <span class="token literal-property property">makeType</span><span class="token operator">:</span>Ref<span class="token operator">&lt;</span>string<span class="token operator">:</span>number<span class="token operator">></span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'2020'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
makeType<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2020</span><span class="token punctuation">;</span> <span class="token comment">// 成功！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，在调用  <code v-pre>ref()</code>  时传入一个泛型参数，来覆盖默认的推导行为：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 得到的类型：Ref&lt;string | number></span>
<span class="token keyword">const</span> year <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string <span class="token operator">|</span> number<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'2020'</span><span class="token punctuation">)</span>
year<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2020</span> <span class="token comment">// 成功！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你指定了一个泛型参数但没有给出初始值，那么最后得到的就将是一个包含  <code v-pre>undefined</code>  的联合类型：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 推导得到的类型：Ref&lt;number | undefined></span>
<span class="token keyword">const</span> n <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h3>
<p>reactive 其实可以理解为带了响应式的对象，但是他和原本的对象是不同的，他本质上返回的是原对象的 [proxy]</p>
<div class="hint-container tip">
<p class="hint-container-title">proxy</p>
<p><code v-pre>Proxy</code> 是 JavaScript 中的一个内置对象，它允许你拦截并自定义对象的基本操作。通过使用 <code v-pre>Proxy</code>，你可以在对象的读取、赋值、函数调用等操作之前或之后插入自定义的逻辑。</p>
<p>创建一个 <code v-pre>Proxy</code> 对象时，你需要传入两个参数：目标对象和处理程序（handler）。目标对象是你想要拦截操作的对象，处理程序是一个包含拦截方法的对象。</p>
<p>下面是一个简单的示例，展示了如何使用 <code v-pre>Proxy</code> 来拦截对象的读取和赋值操作：</p>
</div>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">正在读取属性 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>property<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">正在设置属性 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>property<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 为 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    target<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 读取属性 name，输出 "正在读取属性 name"，然后输出 "John"</span>
proxy<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">;</span> <span class="token comment">// 设置属性 age 为 35，输出 "正在设置属性 age 为 35"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 读取属性 age，输出 "正在读取属性 age"，然后输出 35</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们创建了一个目标对象 <code v-pre>target</code>，它包含 <code v-pre>name</code> 和 <code v-pre>age</code> 两个属性。然后，我们定义了一个处理程序 <code v-pre>handler</code>，它包含了 <code v-pre>get</code> 和 <code v-pre>set</code> 方法来拦截属性的读取和赋值操作。最后，我们创建了一个 <code v-pre>Proxy</code> 对象 <code v-pre>proxy</code>，将目标对象和处理程序传入。</p>
<p>当我们通过 <code v-pre>proxy</code> 对象读取或设置属性时，处理程序中的相应方法会被调用，并且我们可以在这些方法中插入自定义的逻辑。在上面的示例中，我们简单地输出了一些日志信息，但你可以根据需要执行任何自定义操作。</p>
<p><code v-pre>Proxy</code> 对象还支持其他许多拦截方法，例如 <code v-pre>apply</code>（拦截函数的调用）、<code v-pre>has</code>（拦截 <code v-pre>in</code> 操作符）、<code v-pre>deleteProperty</code>（拦截属性删除操作）等。你可以根据需要使用这些方法来自定义对象的行为。</p>
<h4 id="为-reactive-标注类型​" tabindex="-1"><a class="header-anchor" href="#为-reactive-标注类型​" aria-hidden="true">#</a> 为  <code v-pre>reactive()</code>  标注类型<a href="https://cn.vuejs.org/guide/typescript/composition-api.html#typing-reactive" target="_blank" rel="noopener noreferrer">​<ExternalLinkIcon/></a></h4>
<p><code v-pre>reactive()</code>  也会隐式地从它的参数中推导类型：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token comment">// 推导得到的类型：{ title: string }</span>
<span class="token keyword">const</span> book <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Vue 3 指引'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>


要显式地标注一个  <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">reactive</span><span class="token template-punctuation string">`</span></span>  变量的类型，我们可以使用接口：


<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">interface</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string
  year<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">book</span><span class="token operator">:</span> Book <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Vue 3 指引'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for" aria-hidden="true">#</a> v-for</h2>
<h2 id="computed-计算属性" tabindex="-1"><a class="header-anchor" href="#computed-计算属性" aria-hidden="true">#</a> computed 计算属性</h2>
<p>计算属性要记得，只做计算，也就是说，不应该有副作用，即不要在计算属性中尝试操作 dom 元素或者异步操作。<br>
他就像一个 temp，只读的返回每一次得到计算后的结果<br>
计算属性的值会缓存，只有当计算属性的依赖变化了才会重新计算<br>
他的原型大概为</p>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2>
<p>父组件可以像子组件传递值，在<code v-pre>&lt;script setup&gt;</code>中,可以使用 vue 自带的 defineprops(不需要 import) 来定义要传递的值，然后在子组件中使用 props 接收<br>
我们使用一个简单的 todolist 和 listItem 来实验一下</p>
<p>::: tips<br>
现在来说一般都使用 defineProps&lt;{}&gt;()这样的格式在子组件定义传递的参数</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 父组件 </span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"center-col p-2 gap-2"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ul v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(habit, index) in habitList"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"index"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>HabitItem <span class="token operator">:</span>habit<span class="token operator">=</span><span class="token string">"habit"</span> <span class="token operator">:</span>index<span class="token operator">=</span><span class="token string">"index + 1"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token comment">// 子组件 </span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  habit<span class="token operator">:</span> Habit
  index<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text-4.3 font-bold truncate overflow-x-auto mb-1 text-start"</span><span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">.</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> habit<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用-ts-标准-props" tabindex="-1"><a class="header-anchor" href="#用-ts-标准-props" aria-hidden="true">#</a> 用 TS 标准 props</h3>
<p>通过基于类型的声明，一个 prop 可以像使用其他任何类型一样使用一个复杂类型：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">interface</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span>
  year<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  book<span class="token operator">:</span> Book
<span class="token punctuation">}</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于运行时声明，我们可以使用 PropType 工具类型：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
book<span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>Book<span class="token operator">></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="emits" tabindex="-1"><a class="header-anchor" href="#emits" aria-hidden="true">#</a> emits</h2>
<h3 id="子传父" tabindex="-1"><a class="header-anchor" href="#子传父" aria-hidden="true">#</a> 子传父</h3>
<p>emits</p>
<ul>
<li>指正版<br>
首先子组件给父组件传值，需要定义emits，传的是方法，</li>
</ul>
<p>然后在父组件那边引用子组件的地方，可以@这个传过去的方法，再写一个函数来接子组件的值，父组件这边函数的(parms),其实就是从子组件引过来的值，直接用父组件这边的值等于就好了</p>
<p>本质：在父组件中，可以调用子组件的事件，但是相对的如果要接受子组件的值，需要父组件这边再写一个方法来传值</p>
<ul>
<li>官方代码示例</li>
</ul>
<p>在父组件中，我们若想接收子组件传递的数据，还得再声明一个方法，然后用一个参数，接收子组件传来的参数。</p>
<ul>
<li>首先，要使用emit的话，要先使用defineEmits() 定义需要传过去的方法名称</li>
<li>然后，可以在需要绑定事件的地方，可以直接使用，$emit(&quot;methods&quot;,parms) 写事件，也可以在script中，用emit先创建一个事件</li>
</ul>
<h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2>
<p>slot 插槽是为了可以更好的使用组件，因为我们的组件内容如果是写死的话，复用性会很低<br>
比如说我有一个组件</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// son.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>这是写死的内容<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么我在别的任何地方引入时这一块渲染的内容时这一块的内容就是死的<br>
为了提高复用性，vue 提供了插槽</p>
<h3 id="默认插槽" tabindex="-1"><a class="header-anchor" href="#默认插槽" aria-hidden="true">#</a> 默认插槽</h3>
<p>使用默认插槽只要在组件内部需要插值的地方提供<code v-pre>&lt;slot&gt;&lt;/slot&gt;</code>标签即可</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>h3<span class="token operator">></span>testslot<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
    第一个是默认插槽，不需要使用<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">template v-slot</span><span class="token template-punctuation string">`</span></span>
    <span class="token operator">&lt;</span>slot<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在需要用到组件的地方，直接在组件标签内部写入需要插入的内容即可</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> TestSlot <span class="token keyword">from</span> <span class="token string">'../components/TestSlot.vue'</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>h3<span class="token operator">></span>vue进阶<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>h4<span class="token operator">></span>插槽练习<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
    在这里我们可以引入我们需要的组件，然后将组件标签打开
    <span class="token operator">&lt;</span>TestSlot<span class="token operator">></span>
      你好，这里是普通的template插入普通的内容，只要子组件设置了slot即可，直接写内容
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>
          这是带name的插槽，需要使用template包起来，然后指定名字才，使用v<span class="token operator">-</span>slot，虽然被简化成了#
        <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span> <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>TestSlot<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/frontend/vue/images/20230925164858.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a> 具名插槽</h3>
<p>有时在一个组件中包含多个插槽出口是很有用的。举例来说，在一个 组件中，有如下模板：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>header<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 标题内容放这里 <span class="token operator">--</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
  <span class="token operator">&lt;</span>main<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 主要内容放这里 <span class="token operator">--</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token operator">&lt;</span>footer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 底部内容放这里 <span class="token operator">--</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们使用的时候，需要具体的命名 slot 才能使用</p>
<div class="hint-container tip">
<p class="hint-container-title">注意</p>
<p>这里的默认插槽需要使用#default，不然就会报错<br>
要为具名插槽传入内容，我们需要使用一个含 v-slot 指令的</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span> 元素，并将目标插槽的名字传给该指令：

template
<span class="token operator">&lt;</span>BaseLayout<span class="token operator">></span>
<span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>header<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> header 插槽的内容放这里 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>BaseLayout<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p>v-slot 有对应的简写 #，因此 <code v-pre>&lt;template v-slot:header&gt; </code>可以简写为 <code v-pre>&lt;template #header&gt;</code>。其意思就是“将这部分模板片段传入子组件的 header 插槽中”。<br>
<img src="@source/frontend/vue/images/20230925165429.png" alt="" loading="lazy"></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>
    在这里我们可以引入我们需要的组件，然后将组件标签打开
    <span class="token operator">&lt;</span>TestSlot<span class="token operator">></span>
      <span class="token operator">&lt;</span>template #<span class="token keyword">default</span><span class="token operator">></span>你好，这里是普通的template插入普通的内容，只要子组件设置了slot即可，直接写内容<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

      <span class="token operator">&lt;</span>template #header<span class="token operator">></span>
        这是带name的插槽，需要使用template包起来，然后指定名字才，使用v<span class="token operator">-</span>slot，虽然被简化成了#
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>TestSlot<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/frontend/vue/images/20230925165933.png" alt="" loading="lazy"><br>
还可以往里面放默认内容,就是在<code v-pre>&lt;slot&gt;</code>标签里写好，如果没有使用 slot 的话也会默认的渲染出来</p>
<h3 id="可以动态插槽名" tabindex="-1"><a class="header-anchor" href="#可以动态插槽名" aria-hidden="true">#</a> 可以动态插槽名</h3>
<p>动态插槽名 ​<br>
动态指令参数在 v-slot 上也是有效的，即可以定义下面这样的动态插槽名：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>
<span class="token operator">&lt;</span>base<span class="token operator">-</span>layout<span class="token operator">></span>
  <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span><span class="token punctuation">[</span>dynamicSlotName<span class="token punctuation">]</span><span class="token operator">></span>
    <span class="token operator">...</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 缩写为 <span class="token operator">--</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>template #<span class="token punctuation">[</span>dynamicSlotName<span class="token punctuation">]</span><span class="token operator">></span>
    <span class="token operator">...</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>base<span class="token operator">-</span>layout<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h3>
<p>在插槽中，我们是无法访问子组件的作用域的，也就是说拿不到子组件的数据，如果想要拿子组件的数据，也可以和使用 props 那样，通过 slot 传递</p>
<h3 id="具名作用域插槽" tabindex="-1"><a class="header-anchor" href="#具名作用域插槽" aria-hidden="true">#</a> 具名作用域插槽</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">"子组件传递插槽props给父"</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"props"</span> <span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">"message"</span> <span class="token operator">:</span>count<span class="token operator">=</span><span class="token number">1</span><span class="token operator">></span>这是通过子slot向上传递props<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>template #props<span class="token operator">=</span><span class="token string">"testProps"</span><span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token punctuation">{</span> testProps<span class="token punctuation">.</span>text <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token punctuation">{</span> testProps<span class="token punctuation">.</span>count <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/frontend/vue/images/20230925172432.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


