---
title: Parallax来制造视差效果
date: 2023-02
---

## 简单介绍&github 地址

[github](https://github.com/wagerfield/parallax)
palallax 是一个简单的视差 js 库，老东西了，很轻量，npm 可能都不太行了，然后使用就是通过在 html 上，用 data-depth 设置层级，然后在 js 里面监听 scene 然后调用就能用了
简单示例

```js {.line-numbers}
<div id="scene">
    <div data-depth="0.2">My first Layer!</div>
    <div data-depth="0.6">My second Layer!</div>
</div>
<script>
    // 运行视差
    let scene = document.getElementById('scene');
    let parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        clipRelativeInput: false,
        hoverOnly: false,

    });
</script>
```

## 属性表，看这个就够了

![](images/20240228135133.png)

## 效果

https://github.com/bluestudyhard/myToys
