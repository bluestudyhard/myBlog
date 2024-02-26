---
title: linux 基础
---
[入门指南](https://zhuanlan.zhihu.com/p/74123215)

查看 ip 地址

```bash
ip address
ifconfig
```

## linux 指令

### ls 指令

ls -a 显示所有文件，包括隐藏文件比如说
. .. .bashrc
ls -l 显示文件的详细信息比如说
drwxr-xr-x 2 root root 4096 10 月 8 10:48 bin
ls -d 显示目录本身，而不是目录下的文件，比如说
ls -h 显示文件大小，以人类可读的方式显示
ls -i 显示文件的 inode 编号
ls -R 递归显示目录下的文件
比如说

```bash

```

### 文件操作

#### 文件创建 mkdir touch

mkdir xxx 创建目录
mkdir -p 创建多级目录
mkdir -p doc1/doc2/doc 这样会创建一个文件结构为 doc1/doc2/doc 的目录
如果想创建两个分级又有子目录的目录，可以这样
mkdir -p doc1/doc2 doc3/doc4
这样会得到 doc1 和 doc3 两个一级目录

**如果想在 doc1 下在 doc3 创建目录 doc5**
mkdir ../doc3/doc5

单文件创建
touch xxx 创建文件
touch doc1/doc2/doc3 创建多级目录下的文件

#### 文件删除 rm

普通删除 rm xxx
强制删除 rm -f xxx
删除目录 rm -r doc1
删除目录下所有文件 rm -rf doc1

### 文件复制 cp

复制文件，然后改名字
cp doc1 doc2
复制文件到另外的文件夹，再改名字
cp doc1/doc3 doc2/doc4 doc_new

### 文件移动 mv

移动文件到文件夹
mv doc1 ../doc2
文件重命名操作
mv doc1 doc2

## 使用 Vim

### Vim 的常用操作

0 回到行首
hjkl 左下上右移动
Yy 复制
p 粘贴
D 删除整行
X 删除单个字符
【esc】退出一些操作
U 撤销
v 长按选择相当于 shift 选中 V 全选
w 查找下一个单词
dw 删除整个单词
【ctrl+w/x】自增自减
Ciw 插入替换

## 文件操作

### 文件查找

find -name xxx 查找当前目录的文件
