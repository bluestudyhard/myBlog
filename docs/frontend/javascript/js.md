## 箭头函数

> 箭头函数是 ES6 中新增的函数定义方式，它是一种简化的函数表达式，箭头函数的语法比函数表达式更简洁，而且没有自己的 this，arguments，super 或 new.target。这些函数表达式最适合用于非方法函数，它们不能用作构造函数。
> 简单示例一下

```js 
// 1. 无参数
const func = () => {
  xxx;
};
// 等价于
function func() {}
// 2. 可以简化那个框框，如果只有一个参数 会直接返回值
const func = (a) => a + 2;
// 等价于
function func(a) {
  return a + 2;
}
// 3. 还有一种在里面也需要return的，比如说vue的计算属性
const computed =
```

## Array 方法常用集合

### map

map 生成一个新的数组，浅拷贝，值为在原数组中处理的值

### filter

filter 是过滤函数，用于生成一个新的数组，值为在原数组中符合条件的值，可以理解为，你 return 的是我想要的值，filter 的返回值是 bool
最简单用法

```js 
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter((item) => item > 5); // [6,7,8,9,10]
```

当 filter 里面有套一层对象的时候

```js 
arr = [
  { name: "张三", age: 18 },
  { name: "李四", age: 19 },
  { name: "王五", age: 20 },
  { name: "赵六", age: 21 },
];
arr.filter((item) => item.age > 19); // [{name: "王五", age: 20},{name: "赵六", age: 21}]
```

当 filter 里面套两层以上的时候

```js 
[
  {
    name: "name1",
    bookmarks: [
      {
        checked: true,
        title: "111",
      },
      {
        checked: true,
        title: "111",
      },
    ],
  },
  {
    name: "name2",
    bookmarks: [
      {
        checked: false,
        title: "222",
      },
    ],
  },
];
在这里如果我直接这样filter的话，会发生什么呢
arr.filter((item)=>{
  const bookmarks = item.bookmarks.filter((item)=>item.checked)
  return bookmarks
})
如果我这样子filter的话，筛出来的arr是没有发生任何改变的，你想，return的就是一个bookmarks，相当于没有筛，无论这个bookmarks是有还是没有都一样
所以应该这样
arr.filter((item)=>{
  const bookmarks = item.bookmarks.filter((item)=>item.checked)
  return bookmarks.length >0
})
至少有一个条件符合才能筛出来
```

```

### splice

### from

### reduce

### find

### every | some

### flat()

### flatMap()

```

```

```
