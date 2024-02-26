<template><div><p><a href="https://zhuanlan.zhihu.com/p/74123215" target="_blank" rel="noopener noreferrer">入门指南<ExternalLinkIcon/></a></p>
<p>查看 ip 地址</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ip</span> address
<span class="token function">ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-指令" tabindex="-1"><a class="header-anchor" href="#linux-指令" aria-hidden="true">#</a> linux 指令</h2>
<h3 id="ls-指令" tabindex="-1"><a class="header-anchor" href="#ls-指令" aria-hidden="true">#</a> ls 指令</h3>
<p>ls -a 显示所有文件，包括隐藏文件比如说<br>
. .. .bashrc<br>
ls -l 显示文件的详细信息比如说<br>
drwxr-xr-x 2 root root 4096 10 月 8 10:48 bin<br>
ls -d 显示目录本身，而不是目录下的文件，比如说<br>
ls -h 显示文件大小，以人类可读的方式显示<br>
ls -i 显示文件的 inode 编号<br>
ls -R 递归显示目录下的文件<br>
比如说</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h3>
<h4 id="文件创建-mkdir-touch" tabindex="-1"><a class="header-anchor" href="#文件创建-mkdir-touch" aria-hidden="true">#</a> 文件创建 mkdir touch</h4>
<p>mkdir xxx 创建目录<br>
mkdir -p 创建多级目录<br>
mkdir -p doc1/doc2/doc 这样会创建一个文件结构为 doc1/doc2/doc 的目录<br>
如果想创建两个分级又有子目录的目录，可以这样<br>
mkdir -p doc1/doc2 doc3/doc4<br>
这样会得到 doc1 和 doc3 两个一级目录</p>
<p><strong>如果想在 doc1 下在 doc3 创建目录 doc5</strong><br>
mkdir ../doc3/doc5</p>
<p>单文件创建<br>
touch xxx 创建文件<br>
touch doc1/doc2/doc3 创建多级目录下的文件</p>
<h4 id="文件删除-rm" tabindex="-1"><a class="header-anchor" href="#文件删除-rm" aria-hidden="true">#</a> 文件删除 rm</h4>
<p>普通删除 rm xxx<br>
强制删除 rm -f xxx<br>
删除目录 rm -r doc1<br>
删除目录下所有文件 rm -rf doc1</p>
<h3 id="文件复制-cp" tabindex="-1"><a class="header-anchor" href="#文件复制-cp" aria-hidden="true">#</a> 文件复制 cp</h3>
<p>复制文件，然后改名字<br>
cp doc1 doc2<br>
复制文件到另外的文件夹，再改名字<br>
cp doc1/doc3 doc2/doc4 doc_new</p>
<h3 id="文件移动-mv" tabindex="-1"><a class="header-anchor" href="#文件移动-mv" aria-hidden="true">#</a> 文件移动 mv</h3>
<p>移动文件到文件夹<br>
mv doc1 ../doc2<br>
文件重命名操作<br>
mv doc1 doc2</p>
<h2 id="使用-vim" tabindex="-1"><a class="header-anchor" href="#使用-vim" aria-hidden="true">#</a> 使用 Vim</h2>
<h3 id="vim-的常用操作" tabindex="-1"><a class="header-anchor" href="#vim-的常用操作" aria-hidden="true">#</a> Vim 的常用操作</h3>
<p>0 回到行首<br>
hjkl 左下上右移动<br>
Yy 复制<br>
p 粘贴<br>
D 删除整行<br>
X 删除单个字符<br>
【esc】退出一些操作<br>
U 撤销<br>
v 长按选择相当于 shift 选中 V 全选<br>
w 查找下一个单词<br>
dw 删除整个单词<br>
【ctrl+w/x】自增自减<br>
Ciw 插入替换</p>
<h2 id="文件操作-1" tabindex="-1"><a class="header-anchor" href="#文件操作-1" aria-hidden="true">#</a> 文件操作</h2>
<h3 id="文件查找" tabindex="-1"><a class="header-anchor" href="#文件查找" aria-hidden="true">#</a> 文件查找</h3>
<p>find -name xxx 查找当前目录的文件</p>
</div></template>


