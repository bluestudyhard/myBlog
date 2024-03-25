---
title: 使用 tiptap 创建一个富文本编辑器
date: 2024-01-01
---

## 使用 tiptap 创建一个富文本编辑器

## 安装

## API

### Editor

编辑器就是像 wps 那样写东西的一个区域，tiptap 提供了一个 Editor 类，用于创建一个编辑器实例。
编辑器实例将提供一堆公共方法。方法是常规函数，可以返回任何内容。他们将帮助您使用编辑器。

Don’t confuse methods with commands. Commands are used to change the state of editor (content, selection, and so on) and only return true or false.
不要将方法与命令混淆。命令用于更改编辑器的状态（内容、选择等），并且仅返回 true 或 false 。

### 官方示例的初始编辑器及其用法解释

https://tiptap.dev/docs/editor/examples/default

![](images/20240229140807.png)

- 这里很多都不用说，在这里解释一下这个 hardBreak 是什么意思，这个 hardBreak 是一个 node，它是一个换行符
- 然后 clear nodes 表示清除所有节点，像无序列表，有序列表那些前缀都是我们插入的 node，我们可以通过这个方法清除所有的 node
- horizonal role 是一个分割线，这个也是一个 node

代码如下：

```js
<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'

const editor = useEditor({
  content: '<p>Hello, World!</p>',
  extensions: [
    StarterKit,
  ],
  editable: true, // 是否可编辑
  autofocus: true, // 自动聚焦 就是页面开始时光标会在编辑器中 start在开头 end在结尾  all 选择整个文档
  // 输入规则

})
onUnmounted(() => {
  editor.value?.destroy()
})
</script>

<template>
  <div v-if="editor">
    <button
      :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }"
      @click="editor.chain().focus().toggleBold().run()"
    >
      bold
    </button>
    <button
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :class="{ 'is-active': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()"
    >
      italic
    </button>
    <button
      :disabled="!editor.can().chain().focus().toggleStrike().run()"
      :class="{ 'is-active': editor.isActive('strike') }" @click="editor.chain().focus().toggleStrike().run()"
    >
      strike
    </button>
    <button
      :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }"
      @click="editor.chain().focus().toggleCode().run()"
    >
      code
    </button>
    <button @click="editor.chain().focus().unsetAllMarks().run()">
      clear marks
    </button>
    <button @click="editor.chain().focus().clearNodes().run()">
      clear nodes
    </button>
    <button :class="{ 'is-active': editor.isActive('paragraph') }" @click="editor.chain().focus().setParagraph().run()">
      paragraph
    </button>
    <button
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
    >
      h1
    </button>
    <button
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
    >
      h2
    </button>
    <button
      :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
    >
      h3
    </button>
    <button
      :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
    >
      h4
    </button>
    <button
      :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
    >
      h5
    </button>
    <button
      :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
    >
      h6
    </button>
    <button
      :class="{ 'is-active': editor.isActive('bulletList') }"
      @click="editor.chain().focus().toggleBulletList().run()"
    >
      bullet list
    </button>
    <button
      :class="{ 'is-active': editor.isActive('orderedList') }"
      @click="editor.chain().focus().toggleOrderedList().run()"
    >
      ordered list
    </button>
    <button
      :class="{ 'is-active': editor.isActive('codeBlock') }"
      @click="editor.chain().focus().toggleCodeBlock().run()"
    >
      code block
    </button>
    <button
      :class="{ 'is-active': editor.isActive('blockquote') }"
      @click="editor.chain().focus().toggleBlockquote().run()"
    >
      blockquote
    </button>
    <button @click="editor.chain().focus().setHorizontalRule().run()">
      horizontal rule
    </button>
    <button @click="editor.chain().focus().setHardBreak().run()">
      hard break
    </button>
    <button :disabled="!editor.can().chain().focus().undo().run()" @click="editor.chain().focus().undo().run()">
      undo
    </button>
    <button :disabled="!editor.can().chain().focus().redo().run()" @click="editor.chain().focus().redo().run()">
      redo
    </button>
  </div>
  <EditorContent :editor="editor" class="border-3 outline-none" />
</template>

<style scoped lang="scss">
/* Basic editor styles */
button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }

  &.is-active {
    background: #f5f5f5;
  }
}

.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}
</style>

```

### Editor 的方法

这个方法是编辑器本身的，比如说，获取焦点，设置节点，判断是否聚焦，获取 html 等

### 针对这个 Tiptap 学习的一些总结

首先是，必用的插件先码出来

#### 如何获取编辑器中的节点/状态

编辑器内部都是节点，我们想要通过一些方式来获取这些节点，然后我们就可以根据这些节点来进行一些操作，比如说我想要拿到 node，然后进行 dom 操作，获取每一行的相对高度

这里我翻了很久的文档，其实关键点在于 tiptap 是基于 prosemirror 的，所以我们可以直接使用 prosemirror 的方法来获取编辑器的状态，这些是我在 copilot 里面得到的，感恩

- **2024.3.18 补**
  因为在试的过程中发现了很多问题，终于还是找到了这个 prosmirror 的文档
  https://prosemirror.net/docs/ref/#state.Editor_State

![](images/20240304005740.png)

```js
    const state = editor?.value?.state as EditorState
    console.log('$doc', editor.value.$doc)
    console.log('$node', editor.value.$node)
    console.log('$nodes', editor.value.$nodes)
    console.log('pos', editor.value.$pos)
    console.log('view', editor.value.view)
    console.log('state', editor.value.state)
```

我们先把这些编辑器的状态打印出来康康，主要是这个 view，view 里面我们可以看到有 dom，意味着我们可以进行 dom 操作,然后我们就可以通过这个 coordsAtPost 获取每一行坐标，这个的作用类似于 dom 的 getBoundingClientRect
![](images/20240304004248.png)

## 项目要做的功能日志记录

### 富文本编辑器

#### 鼠标点击每一行时显示浮动菜单

想要的效果是类似飞书那样的，鼠标浮动到每一行就会显示一个菜单，然后出现可以操作文本的按钮，比如加粗，H1 等
![](images/20240305115306.png)
好我们提出几个问题

- 怎么获取 dom 节点，上面已经提到了不谈
- 图标库怎么获得，怎么引入图标
- 浮动菜单怎么实现
- 如何让这些功能图标跟随着每一行的高度变化而出现在每一行的左边

让我们一个个解决

- 图标库的话这里是使用了 remixIcon，本来想用 uno 的，但是 uno 的图标库里没有 editor 的图标
  https://github.com/Remix-Design/RemixIcon/blob/master/README_CN.md 官方文档有讲如何使用
  在这里我是借用了官方的示例，下载了 remixicon.symbol.svg,放在 public 文件夹下的 fonts 里，然后引入，再像 tiptap 官方示例那样，通过一个 menu 数组来赋值

![](images/20240305120548.png)

- 浮动菜单怎么实现
  官方的 floatMenu 不好用，然后我看到了拓展里有提到源码是使用的 tippy.js，就找到了[tippy.js](https://atomiks.github.io/tippyjs/v6/all-props/)，然后他提供了挂载一个 dom 节点展开菜单的方法，然后因为我们想要将一个 menuBar 组件挂载到里面，这里就需要用到 vue3 中的 h 函数，然后使用 render()函数渲染，挂载到 tippy 的 content 里面，然后就可以实现了
  ![](images/20240320112344.png)

  ```js
  const tippyBind = (ref < HTMLElement) | (null > null);
  onMounted(() => {
    if (!tippyBind.value || !editor.value) return;

    const div = document.createElement("div");
    const el = h(MenuBar, {
      editor: editor.value,
      onAction: (params) => {
        console.log({ params });
        curIcon.value = params.icon;
        curIsActive.value = params.isActive;
        // console.log('action!', curIcon.value)
      },
    });
    // el 相当于 <MenuBar :editor="editor.value" @action="(icon)=>{xxx} " />
    render(el, div);

    tippy(tippyBind.value, {
      // trigger: 'click',
      // hideOnClick: "toggle", 当这个和trigger为click时，这个框框不会消失
      interactive: true,
      content: div,
      placement: "left",
    });
    // 在编辑器元素上添加一个 mousemove 事件监听器
  });
  ```

- MenuBar 组件

首先要把这麻烦的 menuList 封装一下，其实封装成一个函数，传入 editor 即可



```js
<!--
 * new page
 * @author: blue
 * @since: 2024-03-04
 * MenuBar.vue
-->

<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import remixiconUrl from '/remixicon.symbol.svg'

const props = defineProps<{
  editor: Editor
}>()
defineEmits(['action'])
const { menuActionList } = initMenuList(props.editor)

const menus = menuList.map((item) => {
  const title = item.title
  const itemInActionList = menuActionList.find(actionItem => actionItem.title === title)

  return {
    title,
    icon: item.icon,
    action: itemInActionList?.action || (() => {}),
    isActive: itemInActionList?.isActive || (() => false),
  }
})
</script>

<template>
  <div class="h-30 w-20 container">
    <div flex w="40" class="flex-wrap">
      <!-- is-active 是一个 CSS 类，它会根据后面的表达式的结果动态地添加或移除。表达式 item.isActive ? item.isActive() : false 是一个三元运算符，它会检查 item.isActive 是否存在并且是一个函数。如果是，那么它会调用 item.isActive() 函数并返回结果；如果不是，那么它会返回 false。 -->
      <button
        v-for="(item, index) in menus"
        :key="index"
        :class="{ 'is-active': item.isActive() }"
        class="menu-item-bar"
        :title="item.title"
        @click="() => {
          item.action()
          $emit('action', { icon: item.icon, isActive: item.isActive() })
        }"
      >
        <svg class="remix">
          <use :xlink:href="`${remixiconUrl}#ri-${item.icon}`" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-item-bar {
  background: #f6f9f9;
  color: #252525;
  border: none;
  border-radius: 0.4rem;

  cursor: pointer;
  height: 1.75rem;
  padding: 0.25rem;
  margin-right: 0.25rem;
  width: 1.75rem;

  svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  &.is-active,
  &:hover {
    color: #4177f4;
    background-color: #e0e9ff;
  }
}
.menu-item {
  background: transparent;
  border: none;
  border-radius: 0.4rem;
  color: transparent;
  cursor: pointer;
  height: 1.75rem;
  padding: 0.25rem;
  margin-right: 0.25rem;
  width: 1.75rem;
  position: fixed;
  display: none;

  svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  &.is-active {
    display: block;
    color: #4177f4;
    background-color: #e0e9ff;
  }

  &:hover {
    color: #4177f4;
    background-color: #e0e9ff;
  }
}
</style>

```

- **如何同步获取每一行的坐标，拿到高度**
  前面我们提到了可以使用编辑器的 view 拿到 dom 元素，然后我们可以用 state 先拿到编辑器的状态，然后通过 state 的 selection 获取我们点击每行的坐标
  :::tip
  selection 表示的其实是我们光标选择的区域，还有光标点击的坐标，他里面有 from，to，如果我们只是单纯的点击坐标，from 和 to 是一样的，但是我们还是能拿到这一行的大致位置
  :::
  然后我们使用 view 视图的 coordsAtPos 就可以拿到每一行 p 的上下左右四个坐标
  当然这样还不够，我们还需要在初始化的时候找到第一行 p 的坐标，不然就不会显示了，默认初始编辑器状态为 focus，具体代码如下

  ```js

     // 获取编辑器的视图
    const view = editor?.value?.view as EditorView
    const editorElement = view.dom
    // 初始时拿到编辑器第一行的p标签的坐标

    // 获取编辑器的左边距
    const editorleft = editorElement.offsetLeft
    menuPost.value.left = editorleft - 30

    // 获取选中元素的坐标
    const startCoords = view.coordsAtPos(startPos)

    // const post = view.posAtCoords(startCoords)
    // console.log(post)
    // const res = state.doc.resolve(post.pos)
    // const node = res.nodeAfter
    // console.log('res', res, 'node', node)
    menuPost.value.top = startCoords.top

  /// create时
  onCreate: () => {
    const view = editor?.value?.view as EditorView

    // 初始时拿到编辑器第一行的p标签的坐标
    const initPost = view.coordsAtPos(1)

    menuPost.value.top = initPost.top
    menuPost.value.left = initPost.left - 35
  },
  ```

有了以上的准备后我们开始真正的操作

#### 实现方案 1 （已否决）

我首先想到了非常妙的方法，

#### 实现方案 2（大成功

经过和鱼酱的不懈努力，吃了不知道多少临门一脚的坑，终于在最后关键的 tiptap 官方文档中的 isActive 的源码找到了答案

#### 可使用 markdown 语法

#### 插入图片等各种插件

#### 多人协作编辑 ！important

#### 保存编辑器状态
