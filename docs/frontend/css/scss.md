## 使用 scss 完成主题切换

### @mixin

@mixin 可以理解为一个可以复用的 scss 组件，可以传递参数
然后可以使用@include 来引用他的值，也可以使用@content 来当做 slot，动态插入
简单的示例

```scss
@mixin main_button($color, $bg_color) {
  background-color: $bg_color;
  color: $color;
  padding: 0.5rem;
}
// 在要用的地方使用@include引用
.example_button {
  @include main_button(#586c78, #7499fecd);
}
// 解析结果
.example_button {
  background-color: #7499fecd;
  color: #586c78;
  padding: 0.5rem;
}
```

**使用@content**

```scss
@mixin main_button($bg_color) {
  background: $bg_color;
  margin: 1rem;
  @content;
}

// 动态插入值
.example_button {
  @include main_button(#7499fecd) {
    color: #ffff;
  }
}
// 解析结果
.example_button {
  background: $bg_color;
  margin: 1rem;
  color: #ffff;
}
```

### map

scss 可以生成 map 变量，类似于 js 中的对象，可以通过 key 获取 value

```scss
$theme-manage: (
  website-item-text-title: #586c78,
  website-item-text-desc: #94a3b8,
  website-item-boxshadow: 1px 3px 6px 2px #c7dff53d,
  website-item-border-bg: #7499fecd,
);
```

然后可以使用 get-map()获取
::: tip 注意嗷这里的话是要用$map $key 的形式的

```scss
background-color: map-get($map: $theme-manage, $key: website-item-border-bg);
```

### @each
