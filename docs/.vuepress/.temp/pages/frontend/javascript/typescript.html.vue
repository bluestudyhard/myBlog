<template><div><h2 id="ts-的应用场景" tabindex="-1"><a class="header-anchor" href="#ts-的应用场景" aria-hidden="true">#</a> ts 的应用场景</h2>
<p>我们在什么时候会使用 ts 呢？<br>
我们使用 typescript 的本质就是为了方便，让代码更加严谨，而且根据泛型的概念，使用泛型就是为了复用，所以在有复用参数的情况下，我们就需要做好接口然后要保证代码的观赏性</p>
<h2 id="shuj" tabindex="-1"><a class="header-anchor" href="#shuj" aria-hidden="true">#</a> shuj</h2>
<h3 id="布尔值" tabindex="-1"><a class="header-anchor" href="#布尔值" aria-hidden="true">#</a> 布尔值</h3>
<p>最基本的数据类型就是简单的 true/false 值，在 JavaScript 和 TypeScript 里叫做<code v-pre>boolean</code>（其它语言中也一样）。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let isDone: boolean = false;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数字" tabindex="-1"><a class="header-anchor" href="#数字" aria-hidden="true">#</a> 数字</h3>
<p>和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是<code v-pre>number</code>。 除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015 中引入的二进制和八进制字面量。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3>
<p>JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用<code v-pre>string</code>表示文本数据类型。 和 JavaScript 一样，可以使用双引号（<code v-pre>&quot;</code>）或单引号（<code v-pre>'</code>）表示字符串。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let name: string = "bob";
name = "smith";
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以使用<em>模版字符串</em>，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（<code v-pre>`</code>），并且以<code v-pre>${ expr }</code>这种形式嵌入表达式</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这与下面定义<code v-pre>sentence</code>的方式效果相同：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let sentence: string = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3>
<p>TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上<code v-pre>[]</code>，表示由此类型元素组成的一个数组：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let list: number[] = [1, 2, 3];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二种方式是使用数组泛型，<code v-pre>Array&lt;元素类型&gt;</code>：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let list: Array&lt;number> = [1, 2, 3];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="元组-tuple" tabindex="-1"><a class="header-anchor" href="#元组-tuple" aria-hidden="true">#</a> 元组 Tuple</h3>
<p>元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为<code v-pre>string</code>和<code v-pre>number</code>类型的元组。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问一个已知索引的元素，会得到正确的类型：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问一个越界的元素，会使用联合类型替代：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>联合类型是高级主题，我们会在以后的章节里讨论它。</p>
<h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3>
<p><code v-pre>enum</code>类型是对 JavaScript 标准数据类型的一个补充。 像 C###等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>enum Color {Red, Green, Blue}
let c: Color = Color.Green;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，从<code v-pre>0</code>开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从<code v-pre>1</code>开始编号：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，全部都采用手动赋值：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

alert(colorName);  // 显示'Green'因为上面代码里它的值是2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="任意值" tabindex="-1"><a class="header-anchor" href="#任意值" aria-hidden="true">#</a> 任意值</h3>
<p>有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用<code v-pre>any</code>类型来标记这些变量：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在对现有代码进行改写的时候，<code v-pre>any</code>类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为<code v-pre>Object</code>有相似的作用，就像它在其它语言中那样。 但是<code v-pre>Object</code>类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你只知道一部分数据的类型时，<code v-pre>any</code>类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let list: any[] = [1, true, "free"];

list[1] = 100;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空值" tabindex="-1"><a class="header-anchor" href="#空值" aria-hidden="true">#</a> 空值</h3>
<p>某种程度上来说，<code v-pre>void</code>类型像是与<code v-pre>any</code>类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是<code v-pre>void</code>：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function warnUser(): void {
    alert("This is my warning message");
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>声明一个<code v-pre>void</code>类型的变量没有什么大用，因为你只能为它赋予<code v-pre>undefined</code>和<code v-pre>null</code>：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let unusable: void = undefined;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined" aria-hidden="true">#</a> Null 和 Undefined</h3>
<p>TypeScript 里，<code v-pre>undefined</code>和<code v-pre>null</code>两者各自有自己的类型分别叫做<code v-pre>undefined</code>和<code v-pre>null</code>。 和<code v-pre>void</code>相似，它们的本身的类型用处不是很大：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下<code v-pre>null</code>和<code v-pre>undefined</code>是所有类型的子类型。 就是说你可以把<code v-pre>null</code>和<code v-pre>undefined</code>赋值给<code v-pre>number</code>类型的变量。</p>
<p>然而，当你指定了<code v-pre>--strictNullChecks</code>标记，<code v-pre>null</code>和<code v-pre>undefined</code>只能赋值给<code v-pre>void</code>和它们各自。 这能避免<em>很多</em>常见的问题。 也许在某处你想传入一个<code v-pre>string</code>或<code v-pre>null</code>或<code v-pre>undefined</code>，你可以使用联合类型<code v-pre>string | null | undefined</code>。 再次说明，稍后我们会介绍联合类型。</p>
<blockquote>
<p>注意：我们鼓励尽可能地使用<code v-pre>--strictNullChecks</code>，但在本手册里我们假设这个标记是关闭的。</p>
</blockquote>
<h3 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> Never</h3>
<p><code v-pre>never</code>类型表示的是那些永不存在的值的类型。 例如，<code v-pre>never</code>类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是<code v-pre>never</code>类型，当它们被永不为真的类型保护所约束时。</p>
<p><code v-pre>never</code>类型是任何类型的子类型，也可以赋值给任何类型；然而，<em>没有</em>类型是<code v-pre>never</code>的子类型或可以赋值给<code v-pre>never</code>类型（除了<code v-pre>never</code>本身之外）。 即使<code v-pre>any</code>也不可以赋值给<code v-pre>never</code>。</p>
<p>下面是一些返回<code v-pre>never</code>类型的函数：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// 返回never的函数必须存在无法达到的终点
<span class="token keyword">function</span> error<span class="token punctuation">(</span>message: string<span class="token punctuation">)</span>: never <span class="token punctuation">{</span>
    throw new Error<span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// 推断的返回值类型为never
<span class="token keyword">function</span> <span class="token function-name function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> error<span class="token punctuation">(</span><span class="token string">"Something failed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// 返回never的函数必须存在无法达到的终点
<span class="token keyword">function</span> infiniteLoop<span class="token punctuation">(</span><span class="token punctuation">)</span>: never <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>true<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h3>
<p>有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。</p>
<p>通过<em>类型断言</em>这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。</p>
<p>类型断言有两种形式。 其一是“尖括号”语法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let someValue: any = "this is a string";

let strLength: number = (&lt;string>someValue).length;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个为<code v-pre>as</code>语法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在 TypeScript 里使用 JSX 时，只有<code v-pre>as</code>语法断言是被允许的。</p>
</div></template>


