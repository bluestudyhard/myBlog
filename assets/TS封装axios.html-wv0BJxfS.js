const s=JSON.parse(`{"key":"v-400c92fe","path":"/frontend/%E5%89%8D%E7%AB%AF%E5%B8%B8%E7%94%A8%E8%AF%B7%E6%B1%82/TS%E5%B0%81%E8%A3%85axios.html","title":"","lang":"zh-CN","frontmatter":{"description":"Axios 提供了 raw 来提供原始数据 以下是一个简单的封装方法，具体可以根据 type 的不同来操作 // type interface toDoListType { id?: number done: boolean text?: string time: string // [proName: string]: an } /**封装 */ import axios from 'axios' import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios' const service: AxiosInstance = axios.create({ baseURL: '', }) export const http = { get&lt;T = any&gt;(url: string, config?: AxiosRequestConfig): Promise&lt;AxiosResponse&lt;T&gt;&gt; { return service.get(url, config) }, post&lt;T = any&gt;(url: string, data?: object, config?: AxiosRequestConfig): Promise&lt;AxiosResponse&lt;T&gt;&gt; { return service.post(url, data, config) }, put&lt;T = any&gt;(url: string, data?: object, config?: AxiosRequestConfig): Promise&lt;AxiosResponse&lt;T&gt;&gt; { return service.put(url, data, config) }, delete&lt;T = any&gt;(url: string, config?: AxiosRequestConfig): Promise&lt;AxiosResponse&lt;T&gt;&gt; { return service.delete(url, config) }, }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/frontend/%E5%89%8D%E7%AB%AF%E5%B8%B8%E7%94%A8%E8%AF%B7%E6%B1%82/TS%E5%B0%81%E8%A3%85axios.html"}],["meta",{"property":"og:site_name","content":"melingkk's blog"}],["meta",{"property":"og:description","content":"Axios 提供了 raw 来提供原始数据 以下是一个简单的封装方法，具体可以根据 type 的不同来操作 // type interface toDoListType { id?: number done: boolean text?: string time: string // [proName: string]: an } /**封装 */ import axios from 'axios' import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios' const service: AxiosInstance = axios.create({ baseURL: '', }) export const http = { get&lt;T = any&gt;(url: string, config?: AxiosRequestConfig): Promise&lt;AxiosResponse&lt;T&gt;&gt; { return service.get(url, config) }, post&lt;T = any&gt;(url: string, data?: object, config?: AxiosRequestConfig): Promise&lt;AxiosResponse&lt;T&gt;&gt; { return service.post(url, data, config) }, put&lt;T = any&gt;(url: string, data?: object, config?: AxiosRequestConfig): Promise&lt;AxiosResponse&lt;T&gt;&gt; { return service.put(url, data, config) }, delete&lt;T = any&gt;(url: string, config?: AxiosRequestConfig): Promise&lt;AxiosResponse&lt;T&gt;&gt; { return service.delete(url, config) }, }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-26T15:15:38.000Z"}],["meta",{"property":"article:author","content":"bluestudyhard"}],["meta",{"property":"article:modified_time","content":"2024-02-26T15:15:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-26T15:15:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"bluestudyhard\\",\\"url\\":\\"https://github.com/bluestudyhard?tab=repositories\\"}]}"]]},"headers":[{"level":2,"title":"Axios 提供了 raw 来提供原始数据","slug":"axios-提供了-raw-来提供原始数据","link":"#axios-提供了-raw-来提供原始数据","children":[{"level":3,"title":"请求示例","slug":"请求示例","link":"#请求示例","children":[]},{"level":3,"title":"设置拦截器","slug":"设置拦截器","link":"#设置拦截器","children":[]}]}],"git":{"createdTime":1708960538000,"updatedTime":1708960538000,"contributors":[{"name":"bluestudyhard","email":"3164752596@qq.com","commits":1}]},"readingTime":{"minutes":1.91,"words":572},"filePathRelative":"frontend/前端常用请求/TS封装axios.md","localizedDate":"2024年2月26日","excerpt":"<h2> Axios 提供了 raw 来提供原始数据</h2>\\n<p>以下是一个简单的封装方法，具体可以根据 type 的不同来操作</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// type</span>\\n<span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">toDoListType</span> <span class=\\"token punctuation\\">{</span>\\n  id<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> number\\n  <span class=\\"token literal-property property\\">done</span><span class=\\"token operator\\">:</span> boolean\\n  text<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> string\\n  <span class=\\"token literal-property property\\">time</span><span class=\\"token operator\\">:</span> string\\n\\n  <span class=\\"token comment\\">// [proName: string]: an</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token doc-comment comment\\">/**封装 */</span>\\n<span class=\\"token keyword\\">import</span> axios <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'axios'</span>\\n<span class=\\"token keyword\\">import</span> type <span class=\\"token punctuation\\">{</span> AxiosInstance<span class=\\"token punctuation\\">,</span> AxiosRequestConfig<span class=\\"token punctuation\\">,</span> AxiosResponse <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'axios'</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token literal-property property\\">service</span><span class=\\"token operator\\">:</span> AxiosInstance <span class=\\"token operator\\">=</span> axios<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">baseURL</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">''</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> http <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  get<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span> <span class=\\"token operator\\">=</span> any<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token operator\\">:</span> string<span class=\\"token punctuation\\">,</span> config<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> AxiosRequestConfig<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> Promise<span class=\\"token operator\\">&lt;</span>AxiosResponse<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> service<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span> config<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\n  post<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span> <span class=\\"token operator\\">=</span> any<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token operator\\">:</span> string<span class=\\"token punctuation\\">,</span> data<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> object<span class=\\"token punctuation\\">,</span> config<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> AxiosRequestConfig<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> Promise<span class=\\"token operator\\">&lt;</span>AxiosResponse<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> service<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">post</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span> data<span class=\\"token punctuation\\">,</span> config<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\n  put<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span> <span class=\\"token operator\\">=</span> any<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token operator\\">:</span> string<span class=\\"token punctuation\\">,</span> data<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> object<span class=\\"token punctuation\\">,</span> config<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> AxiosRequestConfig<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> Promise<span class=\\"token operator\\">&lt;</span>AxiosResponse<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> service<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">put</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span> data<span class=\\"token punctuation\\">,</span> config<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\n  <span class=\\"token keyword\\">delete</span><span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span> <span class=\\"token operator\\">=</span> any<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token operator\\">:</span> string<span class=\\"token punctuation\\">,</span> config<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> AxiosRequestConfig<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> Promise<span class=\\"token operator\\">&lt;</span>AxiosResponse<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> service<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">delete</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span> config<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{s as data};
