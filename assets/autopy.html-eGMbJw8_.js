import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as p,b as n,d as s,e,f as t}from"./app-xEYoAD2G.js";const r="/assets/20240107124825-IWaWesWT.png",c="/assets/20240107124401-mLP4KrOm.png",u="/assets/20240107125512-qf6wm1tw.png",d="/assets/20240107125559-GqgLrwbu.png",v={},b=n("h2",{id:"起因",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#起因","aria-hidden":"true"},"#"),s(" 起因")],-1),m=n("br",null,null,-1),h={href:"https://blog.csdn.net/dgvv4/article/details/122268203",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),g=n("br",null,null,-1),y=n("br",null,null,-1),_={href:"https://github.com/autopilot-rs/autopy",target:"_blank",rel:"noopener noreferrer"},f=t('<p><img src="'+r+'" alt="" loading="lazy"><br> 然后我就照着装了</p><p><strong>还是出现了以下的报错</strong></p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>vscode<span class="token punctuation">\\</span>python<span class="token operator">&gt;</span> pip <span class="token function">install</span> autopy
Collecting autopy
  Using cached autopy-4.0.0.tar.gz <span class="token punctuation">(</span><span class="token number">20</span> kB<span class="token punctuation">)</span>
  Preparing metadata <span class="token punctuation">(</span>setup.py<span class="token punctuation">)</span> <span class="token punctuation">..</span>. error
  error: subprocess-exited-with-error
  
  × python setup.py egg_info did not run successfully.    
  │ <span class="token builtin class-name">exit</span> code: <span class="token number">1</span>
  ╰─<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">6</span> lines of output<span class="token punctuation">]</span>
      Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
        File <span class="token string">&quot;&lt;string&gt;&quot;</span>, line <span class="token number">2</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
        File <span class="token string">&quot;&lt;pip-setuptools-caller&gt;&quot;</span>, line <span class="token number">34</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
        File <span class="token string">&quot;C:\\Users<span class="token entity" title="\\316">\\316</span>47\\AppData\\Local\\Temp\\pip-install-eojqaqou<span class="token entity" title="\\a">\\a</span>utopy_3670b565a9404a3da1bf521f2de792f6\\setup.py&quot;</span>, line <span class="token number">8</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
          from setuptools_rust <span class="token function">import</span> Binding, RustExtension
      ModuleNotFoundError: No module named <span class="token string">&#39;setuptools_rust&#39;</span>
      <span class="token punctuation">[</span>end of output<span class="token punctuation">]</span>
  
  note: This error originates from a subprocess, and is likely not a problem with pip.
error: metadata-generation-failed

× Encountered error <span class="token keyword">while</span> generating package metadata.    
╰─<span class="token operator">&gt;</span> See above <span class="token keyword">for</span> output.

note: This is an issue with the package mentioned above, not pip.
hint: See above <span class="token keyword">for</span> details.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Downloading autopy-4.0.0.tar.gz <span class="token punctuation">(</span><span class="token number">20</span> kB<span class="token punctuation">)</span>
  Preparing metadata <span class="token punctuation">(</span>setup.py<span class="token punctuation">)</span> <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Building wheels <span class="token keyword">for</span> collected packages: autopy
  Building wheel <span class="token keyword">for</span> autopy <span class="token punctuation">(</span>setup.py<span class="token punctuation">)</span> <span class="token punctuation">..</span>. error
  error: subprocess-exited-with-error

  × python setup.py bdist_wheel did not run successfully. 
  │ <span class="token builtin class-name">exit</span> code: <span class="token number">1</span>
  ╰─<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">20</span> lines of output<span class="token punctuation">]</span>
      running bdist_wheel
      running build
      running build_py
      creating build
      creating build<span class="token punctuation">\\</span>lib.win-amd64-cpython-310
      creating build<span class="token punctuation">\\</span>lib.win-amd64-cpython-310<span class="token punctuation">\\</span>autopy     
      copying autopy<span class="token punctuation">\\</span>__init__.py -<span class="token operator">&gt;</span> build<span class="token punctuation">\\</span>lib.win-amd64-cpython-310<span class="token punctuation">\\</span>autopy
      running build_ext
      running build_rust
      error: can&#39;t <span class="token function">find</span> Rust compiler
     
      If you are using an outdated pip version, it is possible a prebuilt wheel is available <span class="token keyword">for</span> this package but pip is not able to <span class="token function">install</span> from it. Installing from the wheel would avoid the need <span class="token keyword">for</span> a Rust compiler.
     
      To update pip, run:
     
          pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip
     
      and <span class="token keyword">then</span> retry package installation.
     
      If you did intend to build this package from source, try installing a Rust compiler from your system package manager and ensure it is on the <span class="token environment constant">PATH</span> during installation. Alternatively, rustup <span class="token punctuation">(</span>available at https://rustup.rs<span class="token punctuation">)</span> is the recommended way to download and update the Rust compiler toolchain.
      <span class="token punctuation">[</span>end of output<span class="token punctuation">]</span>

  note: This error originates from a subprocess, and is likely not a problem with pip.
  ERROR: Failed building wheel <span class="token keyword">for</span> autopy
  Running setup.py clean <span class="token keyword">for</span> autopy
Failed to build autopy
ERROR: Could not build wheels <span class="token keyword">for</span> autopy, <span class="token function">which</span> is required to <span class="token function">install</span> pyproject.toml-based projects
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我去搜了b站，发现这玩意只能运行在py3.8以下的版本，而我的版本是3.10，所以我就得主动降级了，然后nnd，发现都整完了，还是不行，还是出现说找不到轮子<br><strong>最后我学会了一手手动安装轮子，然后就解决了问题，终于能找到autopy包了，后面mediapipe也是python版本问题，3.10上装了再install就不行了，会提示已拥有，我也在python3.8的包库里手动装了mediapipe的whl也解决了感觉这个可以解决大部分的包问题</strong></p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><h3 id="安装rustc" tabindex="-1"><a class="header-anchor" href="#安装rustc" aria-hidden="true">#</a> 安装rustc</h3><p>看官网。。。这玩意还需要下载visual Studio的tool</p><h3 id="下载python3-8" tabindex="-1"><a class="header-anchor" href="#下载python3-8" aria-hidden="true">#</a> 下载python3.8</h3><h3 id="手动安装whl" tabindex="-1"><a class="header-anchor" href="#手动安装whl" aria-hidden="true">#</a> 手动安装whl</h3>`,12),w={href:"https://zhuanlan.zhihu.com/p/624374119",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),R=n("br",null,null,-1),q={href:"https://pypi.org/project/autopy/#files",target:"_blank",rel:"noopener noreferrer"},z=n("br",null,null,-1),T=n("img",{src:u,alt:"",loading:"lazy"},null,-1),B=n("br",null,null,-1),E=n("br",null,null,-1),F=n("img",{src:d,alt:"",loading:"lazy"},null,-1),I=n("br",null,null,-1),N=n("br",null,null,-1),j=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>python <span class="token operator">-</span>m pip install autopy<span class="token operator">-</span><span class="token number">4.0</span><span class="token number">.0</span><span class="token operator">-</span>cp38<span class="token operator">-</span>cp38<span class="token operator">-</span>win_amd64<span class="token punctuation">.</span>whl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以先看一下系统具体可以安装哪些标签的.whl文件，可以在命令提示符窗口输入：<code>pip debug --verbose</code>,兼容的文件标签就会显示。</p>`,2);function C(L,P){const a=o("ExternalLinkIcon");return l(),p("div",null,[b,n("p",null,[s("写py大作业的时候发现手势控制鼠标老鼻子卡，想康康有没有更丝滑的，然后就找到了这哥们"),m,n("a",h,[s("https://blog.csdn.net/dgvv4/article/details/122268203"),e(a)]),k,s(" ok直接cv，然后这哥们用了autopy，那就安装被"),g,s(" 好，问题来了，又是说我缺少rustc 又是说我缺少一个什么wheel的"),y,s(" 简单来说就是，这玩意是用rust写的，需要rust环境才能运行，而且看了"),n("a",_,[s("官网"),e(a)]),s("，")]),f,n("p",null,[s("可以看这个blog "),n("a",w,[s("https://zhuanlan.zhihu.com/p/624374119"),e(a)])]),n("p",null,[s("whl后缀的文件是python的包文件，相当于是一个压缩包，里面包含了python的包"),x,s(" 这个得学"),R,s(" 首先去"),n("a",q,[s("https://pypi.org/project/autopy/#files"),e(a)]),s(" 找到对应的版本，然后下载"),z,T,B,s(" 在这里也可以看到py的限制版本在3.8及以下"),E,F,I,s(" 然后我们找到了以后，就可以把这个放到python的根目录下，或者项目的根目录下"),N,s(" cd 根目录，运行")]),j])}const A=i(v,[["render",C],["__file","autopy.html.vue"]]);export{A as default};
