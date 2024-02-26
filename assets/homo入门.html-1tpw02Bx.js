import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c as l,b as n,d as s,e as t,f as e}from"./app-xEYoAD2G.js";const c="/assets/20230929221147-92Vxok1u.png",u="/assets/20231011215018-M52DVpBc.png",r="/assets/20231011225508-CEbfEwTm.png",d="/assets/20231025163926-6k2xCE8L.png",k="/assets/20231025164359-g9Lfc8ca.png",v="/assets/20231025164211-v2McC6gm.png",m="/assets/20231001201647-UgD6e0RW.png",b="/assets/20231011215232-x6s2ztZW.png",g="/assets/20231011215247-Oj_UDk2p.png",h="/assets/20231025164738-IrragrQN.png",f="/assets/20230929221945-4QDSJh6d.png",_="/assets/20230929222002--dEx85we.png",y="/assets/20230929221821-SwTFdy5J.png",x={},q=n("p",null,"[toc]",-1),S=n("h2",{id:"安装及配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装及配置","aria-hidden":"true"},"#"),s(" 安装及配置")],-1),w=n("a",{href:""},"官网下载 devco，一路 continue",-1),$=n("br",null,null,-1),C={href:"https://zhuanlan.zhihu.com/p/587008009",target:"_blank",rel:"noopener noreferrer"},z=n("br",null,null,-1),B=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token operator">&gt;</span> fnm <span class="token function">ls</span>
* v16.20.2
* v18.17.1 default, lts-latest
* system
fnm <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速使用-arkts-创建一个基础项目-stage-模型" tabindex="-1"><a class="header-anchor" href="#快速使用-arkts-创建一个基础项目-stage-模型" aria-hidden="true">#</a> 快速使用 arkts 创建一个基础项目(stage 模型)</h2>`,2),j=n("li",null,[n("p",null,"ArkTS 工程目录结构（Stage 模型）")],-1),T=n("li",null,[n("p",null,[n("strong",null,"AppScope > app.json5"),s("：应用的全局配置信息。")])],-1),E=n("strong",null,"entry",-1),A={href:"http://docs.openharmony.cn/pages/v3.2/zh-cn/glossary.md/#hap",target:"_blank",rel:"noopener noreferrer"},F=n("li",null,[n("strong",null,"src > main > ets"),s("：用于存放 ArkTS 源码。")],-1),I=n("li",null,[n("strong",null,"src > main > ets > entryability"),s("：应用/服务的入口。")],-1),W=n("li",null,[n("strong",null,"src > main > ets > pages"),s("：应用/服务包含的页面。")],-1),P=n("strong",null,"src > main > resources",-1),D={href:"http://docs.openharmony.cn/pages/v3.2/zh-cn/application-dev/quick-start/resource-categories-and-access.md/#%E8%B5%84%E6%BA%90%E5%88%86%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"},H=n("strong",null,"src > main > module.json5",-1),R={href:"http://docs.openharmony.cn/pages/v3.2/zh-cn/application-dev/quick-start/module-configuration-file.md/",target:"_blank",rel:"noopener noreferrer"},L=n("li",null,[n("strong",null,"build-profile.json5"),s("：当前的模块信息 、编译信息配置项，包括 buildOption、targets 配置等。其中 targets 中可配置当前运行环境，默认为 HarmonyOS。若需开发 OpenHarmony 应用，则需开发者自行修改为 OpenHarmony。")],-1),N=n("li",null,[n("strong",null,"hvigorfile.ts"),s("：模块级编译构建任务脚本，开发者可以自定义相关任务和代码实现。")],-1),V=n("strong",null,"oh_modules",-1),O={href:"https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/project_overview-0000001053822398-V3#section108143331212",target:"_blank",rel:"noopener noreferrer"},U=n("li",null,[n("p",null,[n("strong",null,"build-profile.json5"),s("：应用级配置信息，包括签名、产品配置等。")])],-1),G=n("li",null,[n("p",null,[n("strong",null,"hvigorfile.ts"),s("：应用级编译构建任务脚本。")])],-1),J=e(`<h2 id="构建第一个页面" tabindex="-1"><a class="header-anchor" href="#构建第一个页面" aria-hidden="true">#</a> 构建第一个页面</h2><ol><li><p>使用文本组件。</p><p>工程同步完成后，在“<strong>Project</strong>”窗口，点击“<strong>entry &gt; src &gt; main &gt; ets &gt; pages</strong>”，打开“<strong>Index.ets</strong>”文件，可以看到页面由 Text 组件组成。“<strong>Index.ets</strong>”文件的示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Index.ets
@Entry
@Component
struct Index {
  @State message: string = &#39;Hello World&#39;

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
      }
      .width(&#39;100%&#39;)
    }
    .height(&#39;100%&#39;)
  }
}
ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加按钮。</p><p>在默认页面基础上，我们添加一个 Button 组件，作为按钮响应用户点击，从而实现跳转到另一个页面。“<strong>Index.ets</strong>”文件的示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Index.ets
@Entry
@Component
struct Index {
  @State message: string = &#39;Hello World&#39;

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        // 添加按钮，以响应用户点击
        Button() {
          Text(&#39;Next&#39;)
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor(&#39;#0D9FFB&#39;)
        .width(&#39;40%&#39;)
        .height(&#39;5%&#39;)
      }
      .width(&#39;100%&#39;)
    }
    .height(&#39;100%&#39;)
  }
}
ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在编辑窗口右上角的侧边工具栏，点击 Previewer，打开预览器。第一个页面效果如下图所示：</p></li></ol><h2 id="构建第二个页面" tabindex="-1"><a class="header-anchor" href="#构建第二个页面" aria-hidden="true">#</a> <img src="http://docs.openharmony.cn/pages/v3.2/zh-cn/application-dev/quick-start/start-with-ets-stage.md/#构建第二个页面" alt="" loading="lazy">构建第二个页面</h2><ol><li><p>创建第二个页面。</p><ul><li>新建第二个页面文件。在“<strong>Project</strong>”窗口，打开“<strong>entry &gt; src &gt; main &gt; ets</strong>”，右键点击“<strong>pages</strong>”文件夹，选择“<strong>New &gt; ArkTS File</strong>”，命名为“<strong>Second</strong>”，点击“<strong>Finish</strong>”。可以看到文件目录结构如下：<br><img src="http://docs.openharmony.cn/doc_v3.2_1694391385/zh-cn/application-dev/quick-start/figures/secondPage.png" alt="secondPage" loading="lazy"><blockquote><p><strong>说明：</strong></p><p>开发者也可以在右键点击“<strong>pages</strong>”文件夹时，选择“<strong>New &gt; Page</strong>”，则无需手动配置相关页面路由。</p></blockquote></li><li>配置第二个页面的路由。在“<strong>Project</strong>”窗口，打开“<strong>entry &gt; src &gt; main &gt; resources &gt; base &gt; profile</strong>”，在 main_pages.json 文件中的“src”下配置第二个页面的路由“pages/Second”。示例如下：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;src&quot;: [
    &quot;pages/Index&quot;,
    &quot;pages/Second&quot;
  ]
}
json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>添加文本及按钮。</p><p>参照第一个页面，在第二个页面添加 Text 组件、Button 组件等，并设置其样式。“<strong>Second.ets</strong>”文件的示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Second.ets
@Entry
@Component
struct Second {
  @State message: string = &#39;Hi there&#39;

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Button() {
          Text(&#39;Back&#39;)
            .fontSize(25)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor(&#39;#0D9FFB&#39;)
        .width(&#39;40%&#39;)
        .height(&#39;5%&#39;)
      }
      .width(&#39;100%&#39;)
    }
    .height(&#39;100%&#39;)
  }
}
ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,4),M={id:"实现页面间的跳转",tabindex:"-1"},Q=n("a",{class:"header-anchor",href:"#实现页面间的跳转","aria-hidden":"true"},"#",-1),X={href:"http://docs.openharmony.cn/pages/v3.2/zh-cn/application-dev/quick-start/start-with-ets-stage.md/#%E5%AE%9E%E7%8E%B0%E9%A1%B5%E9%9D%A2%E9%97%B4%E7%9A%84%E8%B7%B3%E8%BD%AC",target:"_blank",rel:"noopener noreferrer"},Z={href:"http://docs.openharmony.cn/pages/v3.2/zh-cn/application-dev/reference/apis/js-apis-router.md/",target:"_blank",rel:"noopener noreferrer"},K=e(`<ol><li><p>第一个页面跳转到第二个页面。</p><p>在第一个页面中，跳转按钮绑定 onClick 事件，点击按钮时跳转到第二页。“<strong>Index.ets</strong>”文件的示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Index.ets
// 导入页面路由模块
import router from &#39;@ohos.router&#39;;

@Entry
@Component
struct Index {
  @State message: string = &#39;Hello World&#39;

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        // 添加按钮，以响应用户点击
        Button() {
          Text(&#39;Next&#39;)
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor(&#39;#0D9FFB&#39;)
        .width(&#39;40%&#39;)
        .height(&#39;5%&#39;)
        // 跳转按钮绑定onClick事件，点击时跳转到第二页
        .onClick(() =&gt; {
          console.info(\`Succeeded in clicking the &#39;Next&#39; button.\`)
         // 跳转到第二页
           router.pushUrl({ url: &#39;pages/Second&#39; }).then(() =&gt; {
             console.info(&#39;Succeeded in jumping to the second page.&#39;)
           }).catch((err) =&gt; {
             console.error(\`Failed to jump to the second page.Code is \${err.code}, message is \${err.message}\`)
           })
        })
      }
      .width(&#39;100%&#39;)
    }
    .height(&#39;100%&#39;)
  }
}
ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第二个页面返回到第一个页面。</p><p>在第二个页面中，返回按钮绑定 onClick 事件，点击按钮时返回到第一页。“<strong>Second.ets</strong>”文件的示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Second.ets
// 导入页面路由模块
import router from &#39;@ohos.router&#39;;

@Entry
@Component
struct Second {
  @State message: string = &#39;Hi there&#39;

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Button() {
          Text(&#39;Back&#39;)
            .fontSize(25)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor(&#39;#0D9FFB&#39;)
        .width(&#39;40%&#39;)
        .height(&#39;5%&#39;)
        // 返回按钮绑定onClick事件，点击按钮时返回到第一页
        .onClick(() =&gt; {
          console.info(\`Succeeded in clicking the &#39;Back&#39; button.\`)
          try {
            // 返回第一页
            router.back()
            console.info(&#39;Succeeded in returning to the first page.&#39;)
          } catch (err) {
            console.error(\`Failed to return to the first page.Code is \${err.code}, message is \${err.message}\`)
          }
        })
      }
      .width(&#39;100%&#39;)
    }
    .height(&#39;100%&#39;)
  }
}
ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="使用真机运行应用" tabindex="-1"><a class="header-anchor" href="#使用真机运行应用" aria-hidden="true">#</a> 使用真机运行应用</h2><p><img src="`+c+'" alt="" loading="lazy"><br> 在 settings 里面勾这个，然后在虚拟机那里下载本地虚拟机(9gwtf)，然后就能跑虚拟机了<br> 想在虚拟机上运行就点击右上角的绿色 run 箭头就可以</p><h2 id="路由跳转" tabindex="-1"><a class="header-anchor" href="#路由跳转" aria-hidden="true">#</a> 路由跳转</h2><p>对于那种登录或者起始页，跳转后最好使用 replaceUrl，这样子的话会自动清栈，然后返回不了这个页面<br><img src="'+u+'" alt="" loading="lazy"></p><p><strong>！注意</strong><br><img src="'+r+'" alt="" loading="lazy"><br> 这玩意在传值的时候要先用 const 去接，然后再赋值，不然就会一直找不到。。。rnm 的鸿蒙</p><p><strong>新遇到一个离谱的</strong><br> 路由的路径原本可以使用相对路径的，但是不知道怎的，会提示找不到页面，也已经注册了，然后绝对路径也不行，只能使用一个四不像的路径，否则就不给跳了<br><img src="'+d+'" alt="" loading="lazy"></p><h2 id="arkts-语法" tabindex="-1"><a class="header-anchor" href="#arkts-语法" aria-hidden="true">#</a> arkTs 语法</h2><h2 id="关于-homo-本地存储的使用" tabindex="-1"><a class="header-anchor" href="#关于-homo-本地存储的使用" aria-hidden="true">#</a> 关于 homo 本地存储的使用</h2>',9),Y={href:"http://docs.openharmony.cn/pages/v3.2/zh-cn/application-dev/quick-start/arkts-appstorage.md/",target:"_blank",rel:"noopener noreferrer"},nn=e(`<h3 id="appstorage" tabindex="-1"><a class="header-anchor" href="#appstorage" aria-hidden="true">#</a> AppStorage</h3><p>这玩意相当于 vue 里面的仓库全局可以使用，但是比较麻烦<br> 在 ui 界面中要想使用的话必须使用<br><strong>@StorageProp 或者@StorageLink</strong>来和本地的值做一个绑定，prop 能读不能改，link 双向绑定</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>AppStorage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;xx&#39;</span><span class="token punctuation">,</span>xx<span class="token punctuation">)</span>
@Entry
 @<span class="token function">StorageLink</span><span class="token punctuation">(</span><span class="token string">&#39;role&#39;</span><span class="token punctuation">)</span> userRole<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  @<span class="token function">StorageLink</span><span class="token punctuation">(</span><span class="token string">&#39;avatar&#39;</span><span class="token punctuation">)</span> userAvatar<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="persiststorage" tabindex="-1"><a class="header-anchor" href="#persiststorage" aria-hidden="true">#</a> persistStorage</h3><p><img src="`+k+'" alt="" loading="lazy"><br> 这里就相当于是持久化存储，可以拿来存 token 和一些固定的属性，直接写进磁盘，只有应用卸载或重新 build 的时候才会被删掉<br><strong>用法</strong><br> 必须先声明要使用持久化存储，然后会自动判断在 Appstorage 里有没有这个项，没有就生成，有就更新什么的，在重开的时候也会保存<br><img src="'+v+`" alt="" loading="lazy"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>PersistentStorage<span class="token punctuation">.</span><span class="token function">PersistProp</span><span class="token punctuation">(</span><span class="token string">&#39;role&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
PersistentStorage<span class="token punctuation">.</span><span class="token function">PersistProp</span><span class="token punctuation">(</span><span class="token string">&#39;avatar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
PersistentStorage<span class="token punctuation">.</span><span class="token function">PersistProp</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

@Entry
@Component
struct login <span class="token punctuation">{</span>
  @State message<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;nihao&quot;</span><span class="token punctuation">;</span>
  @State username<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  @State password<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  @State token<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  @State allowLogin<span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// @StorageProp(&#39;token&#39;) testStorage: string = AppStorage.Get(&#39;token&#39;)</span>
  @<span class="token function">StorageLink</span><span class="token punctuation">(</span><span class="token string">&#39;role&#39;</span><span class="token punctuation">)</span> userRole<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  @<span class="token function">StorageLink</span><span class="token punctuation">(</span><span class="token string">&#39;avatar&#39;</span><span class="token punctuation">)</span> userAvatar<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  @<span class="token function">StorageLink</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span> nickname<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件参考" tabindex="-1"><a class="header-anchor" href="#组件参考" aria-hidden="true">#</a> 组件参考</h2><h3 id="线性布局" tabindex="-1"><a class="header-anchor" href="#线性布局" aria-hidden="true">#</a> 线性布局</h3><p>这玩意就是 column，row，也就是行列布局，自带 flex，row 布局的话就是一列，然后垂直结构，column 布局就是一行，然后水平结构<br> 行里可以套列，列里也可以套行，然后也可以行套行<br><strong>使用 justify 和 align</strong></p><ul><li>.justifyContent(FlexAlign.Center)</li><li>.alignItems(VerticalAlign.Center)</li></ul><h3 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Grid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">ForEach</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>counts<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">count</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">GridItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">Text</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// Image($r(&#39;app.media.student&#39;))</span>
          <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&#39;app.color.border_shadow1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span><span class="token function">rowsTemplate</span><span class="token punctuation">(</span><span class="token string">&#39;0fr 2fr 0fr&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">columnsTemplate</span><span class="token punctuation">(</span><span class="token string">&#39;0fr 3fr 1fr&#39;</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="border" tabindex="-1"><a class="header-anchor" href="#border" aria-hidden="true">#</a> border</h3><p>边框老麻烦，使用 border 的话要注意，在里面有很多属性，width，color，然后在 width 里面的话，也需要再套一层花括号</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// xxx.ets</span>
@Entry
@Component
struct BorderExample <span class="token punctuation">{</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">Flex</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> FlexAlign<span class="token punctuation">.</span>SpaceAround<span class="token punctuation">,</span> <span class="token literal-property property">alignItems</span><span class="token operator">:</span> ItemAlign<span class="token punctuation">.</span>Center <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 线段</span>
        <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;dashed&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">borderStyle</span><span class="token punctuation">(</span>BorderStyle<span class="token punctuation">.</span>Dashed<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borderWidth</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borderColor</span><span class="token punctuation">(</span><span class="token number">0xAFEEEE</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">borderRadius</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">textAlign</span><span class="token punctuation">(</span>TextAlign<span class="token punctuation">.</span>Center<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
        <span class="token comment">// 点线</span>
        <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;dotted&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0x317AF7</span><span class="token punctuation">,</span> <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">style</span><span class="token operator">:</span> BorderStyle<span class="token punctuation">.</span>Dotted <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">textAlign</span><span class="token punctuation">(</span>TextAlign<span class="token punctuation">.</span>Center<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token string">&#39;100%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span>

      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;.border&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;5lpx&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;10lpx&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&#39;20lpx&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;30lpx&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;#e3bbbb&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">right</span><span class="token operator">:</span> Color<span class="token punctuation">.</span>Blue<span class="token punctuation">,</span> <span class="token literal-property property">top</span><span class="token operator">:</span> Color<span class="token punctuation">.</span>Red<span class="token punctuation">,</span> <span class="token literal-property property">bottom</span><span class="token operator">:</span> Color<span class="token punctuation">.</span>Green <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">topLeft</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">topRight</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">bottomLeft</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">bottomRight</span><span class="token operator">:</span> <span class="token number">80</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> BorderStyle<span class="token punctuation">.</span>Dotted<span class="token punctuation">,</span>
            <span class="token literal-property property">right</span><span class="token operator">:</span> BorderStyle<span class="token punctuation">.</span>Dotted<span class="token punctuation">,</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> BorderStyle<span class="token punctuation">.</span>Solid<span class="token punctuation">,</span>
            <span class="token literal-property property">bottom</span><span class="token operator">:</span> BorderStyle<span class="token punctuation">.</span>Dashed
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">textAlign</span><span class="token punctuation">(</span>TextAlign<span class="token punctuation">.</span>Center<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> Select</h3><p><img src="`+b+'" alt="" loading="lazy"><br><img src="'+g+'" alt="" loading="lazy"></p><h3 id="promptaction" tabindex="-1"><a class="header-anchor" href="#promptaction" aria-hidden="true">#</a> promptAction</h3><p>toast 弹出框，好用<br><img src="'+h+'" alt="" loading="lazy"></p><h2 id="基础的必须理解的" tabindex="-1"><a class="header-anchor" href="#基础的必须理解的" aria-hidden="true">#</a> 基础的必须理解的</h2><h3 id="页面结构" tabindex="-1"><a class="header-anchor" href="#页面结构" aria-hidden="true">#</a> 页面结构</h3><h3 id="关于如何将首页变成自定义的页面" tabindex="-1"><a class="header-anchor" href="#关于如何将首页变成自定义的页面" aria-hidden="true">#</a> 关于如何将首页变成自定义的页面</h3><p>在入口 ability 里改，然后记得在页面里要注册<br><img src="'+f+'" alt="" loading="lazy"><br><img src="'+_+'" alt="" loading="lazy"></p><h3 id="获取权限的方法" tabindex="-1"><a class="header-anchor" href="#获取权限的方法" aria-hidden="true">#</a> 获取权限的方法</h3><p>在 sb 的 module.json5 里配置<br><img src="'+y+'" alt="" loading="lazy"><br> 具体属性看官方文档</p><h3 id="如何引入资源文件" tabindex="-1"><a class="header-anchor" href="#如何引入资源文件" aria-hidden="true">#</a> 如何引入资源文件</h3><ul><li>访问应用资源</li></ul>',28),sn={href:"http://app.type.name",target:"_blank",rel:"noopener noreferrer"},an=n("p",null,`引用 rawfile 下资源时使用"$rawfile('filename')"的形式，filename 需要表示为 rawfile 目录下的文件相对路径，文件名需要包含后缀，路径开头不可以以"/"开头。`,-1),tn=n("p",null,"访问 rawfile 文件的 descriptor 时，可使用资源管理 getRawFd 接口，其返回值 descriptor.fd 为 hap 包的 fd，访问此 rawfile 文件需要结合{fd, offset, length}一起使用。",-1),en={href:"http://app.type.name",target:"_blank",rel:"noopener noreferrer"},pn=e(`<p><strong>$r 返回值为 Resource 对象，可通过 getStringValue 方法获取对应的字符串</strong>。</p><p>在 xxx.ets 文件中，可以使用在 resources 目录中定义的资源。资源分类中资源组目录下的“资源文件示例”显示了.json 文件内容，包含 color.json 文件、string.json 文件和 plural.json 文件。资源的具体使用方法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Text</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.string.string_hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontColor</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.color.color_hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.float.font_hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Text</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.string.string_world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontColor</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.color.color_world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.float.font_world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 引用 string.json 资源。Text 中$r的第一个参数指定string资源，第二个参数用于替换string.json文件中的%s。</span>
<span class="token comment">//如下示例代码value为&quot;We will arrive at five of the clock&quot;。</span>
<span class="token function">Text</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.string.message_arrive&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;five of the clock&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontColor</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.color.color_hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.float.font_hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 引用 plural$资源。Text中$r 的第一个指定 plural 资源，第二个参数用于指定单复数（在中文，单复数均使用 other。在英文，one：代表单数，取值为 1；other：代表复数，取值为大于等于 1 的整数），第三个参数用于替换%d</span>
<span class="token comment">// 如下示例代码为复数，value 为&quot;5 apples&quot;。</span>
<span class="token function">Text</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.plural.eat_apple&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontColor</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.color.color_world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.float.font_world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Image</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.media.my_background_image&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// media资源的$r 引用</span>

<span class="token function">Image</span><span class="token punctuation">(</span><span class="token function">$rawfile</span><span class="token punctuation">(</span><span class="token string">&quot;test.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// rawfile$r 引用 rawfile 目录下图片</span>

<span class="token function">Image</span><span class="token punctuation">(</span><span class="token function">$rawfile</span><span class="token punctuation">(</span><span class="token string">&quot;newDir/newTest.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// rawfile$r 引用 rawfile 目录下图片</span>
ts<span class="token punctuation">;</span>
<span class="token function">Text</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.string.string_hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontColor</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.color.color_hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.float.font_hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Text</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.string.string_world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontColor</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.color.color_world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.float.font_world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 引用 string.json 资源。Text 中$r的第一个参数指定string资源，第二个参数用于替换string.json文件中的%s。</span>
<span class="token comment">//如下示例代码value为&quot;We will arrive at five of the clock&quot;。</span>
<span class="token function">Text</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.string.message_arrive&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;five of the clock&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontColor</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.color.color_hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.float.font_hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 引用 plural$资源。Text中$r 的第一个指定 plural 资源，第二个参数用于指定单复数（在中文，单复数均使用 other。在英文，one：代表单数，取值为 1；other：代表复数，取值为大于等于 1 的整数），第三个参数用于替换%d</span>
<span class="token comment">// 如下示例代码为复数，value 为&quot;5 apples&quot;。</span>
<span class="token function">Text</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.plural.eat_apple&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontColor</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.color.color_world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.float.font_world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Image</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;app.media.my_background_image&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// media资源的$r 引用</span>

<span class="token function">Image</span><span class="token punctuation">(</span><span class="token function">$rawfile</span><span class="token punctuation">(</span><span class="token string">&quot;test.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// rawfile$r 引用 rawfile 目录下图片</span>

<span class="token function">Image</span><span class="token punctuation">(</span><span class="token function">$rawfile</span><span class="token punctuation">(</span><span class="token string">&quot;newDir/newTest.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// rawfile$r 引用 rawfile 目录下图片</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>系统资源</strong><br> 系统资源包含色彩、圆角、字体、间距、字符串及图片等。通过使用系统资源，不同的开发者可以开发出具有相同视觉风格的应用。</p><p>开发者可以通过“$r(&#39;sys.type.resource_id&#39;)”的形式引用系统资源。sys 代表是系统资源；type 代表资源类型，可以取“color”、“float”、“string”、“media”；resource_id 代表资源 id。</p><p>可以查看应用 UX 设计中关于资源的介绍，获取 OpenHarmony 支持的系统资源 ID 及其在不同配置下的取值。</p><p>说明：</p><p>仅声明式开发范式支持使用系统资源，类 Web 开发范式不支持。</p><p>可以查看 OpenHarmony/resources 代码仓了解系统预置资源的实现，这里的目录结构与工程中的 resources 目录类似，也是通过资源限定词匹配不同的设备或设备状态。</p><p>系统资源的使用场景、id、参数详细对照表详见 OpenHarmony_系统资源分层设计表_V1.0.xlsm</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontColor</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;sys.color.ohos_id_color_emphasize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;sys.float.ohos_id_text_size_headline1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontFamily</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;sys.string.ohos_id_text_font_family_medium&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;sys.color.ohos_id_color_palette_aux1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Image</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;sys.media.ohos_app_icon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;sys.color.ohos_id_color_palette_aux1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;sys.float.ohos_id_corner_radius_button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">margin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;sys.float.ohos_id_elements_margin_horizontal_m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">&quot;sys.float.ohos_id_elements_margin_horizontal_l&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动手时遇到的好多好多问题-sbhomo-垃圾社区" tabindex="-1"><a class="header-anchor" href="#动手时遇到的好多好多问题-sbhomo-垃圾社区" aria-hidden="true">#</a> 动手时遇到的好多好多问题，sbhomo！垃圾社区</h2><h3 id="关于-websocket-的问题" tabindex="-1"><a class="header-anchor" href="#关于-websocket-的问题" aria-hidden="true">#</a> 关于 websocket 的问题</h3><p>ws，的 on(&#39;message&#39;,(err,value))能发送的数据只有 string 和 arraybuffer，所以要用 JSON.parse(value)来得到值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15);function on(ln,cn){const a=o("ExternalLinkIcon");return i(),l("div",null,[q,S,n("p",null,[w,$,s(" 然后会让选择 node 版本，需要$>16<18$ 所以这个时候要下载一个"),n("a",C,[s("fnm"),t(a)]),z,s(" 然后使用 fnm 来切换版本")]),B,n("ul",null,[j,T,n("li",null,[n("p",null,[E,s("：OpenHarmony 工程模块，编译构建生成一个"),n("a",A,[s("HAP"),t(a)]),s("包。")]),n("ul",null,[F,I,W,n("li",null,[P,s("：用于存放应用/服务所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件，详见"),n("a",D,[s("资源文件的分类"),t(a)]),s("。")]),n("li",null,[H,s("：模块配置文件。主要包含 HAP 的配置信息、应用/服务在具体设备上的配置信息以及应用/服务的全局配置信息。具体的配置文件说明，详见"),n("a",R,[s("module.json5 配置文件"),t(a)]),s("。")]),L,N])]),n("li",null,[n("p",null,[V,s("：用于存放三方库依赖信息。关于原 npm 工程适配 ohpm 操作，请参考"),n("a",O,[s("历史工程手动迁移"),t(a)]),s("。")])]),U,G]),J,n("h2",M,[Q,s(),n("a",X,[t(a)]),s("实现页面间的跳转")]),n("p",null,[s("页面间的导航可以通过"),n("a",Z,[s("页面路由 router"),t(a)]),s("来实现。页面路由 router 根据页面 url 找到目标页面，从而实现跳转。使用页面路由请导入 router 模块。")]),K,n("p",null,[n("a",Y,[s("http://docs.openharmony.cn/pages/v3.2/zh-cn/application-dev/quick-start/arkts-appstorage.md/"),t(a)])]),nn,n("p",null,[s(`在工程中，通过"$r('`),n("a",sn,[s("app.type.name"),t(a)]),s(`')"的形式引用应用资源。app 代表是应用内 resources 目录中定义的资源；type 代表资源类型（或资源的存放位置），可以取“color”、“float”、“string”、“plural”、“media”，name 代表资源命名，由开发者定义资源时确定。`)]),an,tn,n("p",null,[s("资源描述符不能拼接使用，仅支持普通字符串如'"),n("a",en,[s("app.type.name"),t(a)]),s("'。")]),pn])}const dn=p(x,[["render",on],["__file","homo入门.html.vue"]]);export{dn as default};
