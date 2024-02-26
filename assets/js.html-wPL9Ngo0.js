const n=JSON.parse(`{"key":"v-48242312","path":"/frontend/javascript/js.html","title":"","lang":"zh-CN","frontmatter":{"description":"箭头函数 箭头函数是 ES6 中新增的函数定义方式，它是一种简化的函数表达式，箭头函数的语法比函数表达式更简洁，而且没有自己的 this，arguments，super 或 new.target。这些函数表达式最适合用于非方法函数，它们不能用作构造函数。 简单示例一下 // 1. 无参数 const func = () =&gt; { xxx; }; // 等价于 function func() {} // 2. 可以简化那个框框，如果只有一个参数 会直接返回值 const func = (a) =&gt; a + 2; // 等价于 function func(a) { return a + 2; } // 3. 还有一种在里面也需要return的，比如说vue的计算属性 const computed =","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/frontend/javascript/js.html"}],["meta",{"property":"og:site_name","content":"melingkk's blog"}],["meta",{"property":"og:description","content":"箭头函数 箭头函数是 ES6 中新增的函数定义方式，它是一种简化的函数表达式，箭头函数的语法比函数表达式更简洁，而且没有自己的 this，arguments，super 或 new.target。这些函数表达式最适合用于非方法函数，它们不能用作构造函数。 简单示例一下 // 1. 无参数 const func = () =&gt; { xxx; }; // 等价于 function func() {} // 2. 可以简化那个框框，如果只有一个参数 会直接返回值 const func = (a) =&gt; a + 2; // 等价于 function func(a) { return a + 2; } // 3. 还有一种在里面也需要return的，比如说vue的计算属性 const computed ="}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-26T15:15:38.000Z"}],["meta",{"property":"article:author","content":"bluestudyhard"}],["meta",{"property":"article:modified_time","content":"2024-02-26T15:15:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-26T15:15:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"bluestudyhard\\",\\"url\\":\\"https://github.com/bluestudyhard?tab=repositories\\"}]}"]]},"headers":[{"level":2,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]},{"level":2,"title":"Array 方法常用集合","slug":"array-方法常用集合","link":"#array-方法常用集合","children":[{"level":3,"title":"map","slug":"map","link":"#map","children":[]},{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]}]}],"git":{"createdTime":1693237057000,"updatedTime":1708960538000,"contributors":[{"name":"bluestudyhard","email":"3164752596@qq.com","commits":2}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"frontend/javascript/js.md","localizedDate":"2023年8月28日","excerpt":"<h2> 箭头函数</h2>\\n<blockquote>\\n<p>箭头函数是 ES6 中新增的函数定义方式，它是一种简化的函数表达式，箭头函数的语法比函数表达式更简洁，而且没有自己的 this，arguments，super 或 new.target。这些函数表达式最适合用于非方法函数，它们不能用作构造函数。<br>\\n简单示例一下</p>\\n</blockquote>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 1. 无参数</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">func</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  xxx<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 等价于</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">// 2. 可以简化那个框框，如果只有一个参数 会直接返回值</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">func</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">a</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> a <span class=\\"token operator\\">+</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 等价于</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">a</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> a <span class=\\"token operator\\">+</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">// 3. 还有一种在里面也需要return的，比如说vue的计算属性</span>\\n<span class=\\"token keyword\\">const</span> computed <span class=\\"token operator\\">=</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
