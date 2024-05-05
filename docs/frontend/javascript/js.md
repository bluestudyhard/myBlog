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

## 数据类型 s

### Array 方法常用集合

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
// 在这里如果我直接这样filter的话，会发生什么呢
arr.filter((item) => {
  const bookmarks = item.bookmarks.filter((item) => item.checked);
  return bookmarks;
});
// 如果我这样子filter的话，筛出来的arr是没有发生任何改变的，你想，return的就是一个bookmarks，相当于没有筛，无论这个bookmarks是有还是没有都一样
// 所以应该这样至少有一个条件符合才能筛出来;
arr.filter((item) => {
  const bookmarks = item.bookmarks.filter((item) => item.checked);
  return bookmarks.length > 0;
});
```

### slice

### join

join()就是把数组根据传入的参数规则进行拼接成字符串，返回一个字符串

```js
let arr = ["hello", "word", "nihao"];
let str = arr.join(" ");
console.log(str); // "hello word nihao"
// 如果是没有参数的话，就是把每个字符都拼接成字符串
let arr = ["h", "e", "l", "l", "o"];
let str = arr.join("");
console.log(str); // "hello"
// 根据传入参数匹配拼接
let arr = ["hello", "word", "nihao"];
let str = arr.join(",");
console.log(str); // "hello,word,nihao"
```

### from

array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
例

```js
let arr = [1, 2, 3, 4, 5];
let arr2 = Array.from(arr);
console.log(arr2); // [1, 2, 3, 4, 5]
```

### reduce

reduce 这个东西有点魔法，简单来说就是他自带一个累加器，每次遍历数组时，可以用这个叠加器来进行一些操作，比如说可以拿来去重，扁平化数组，对象分组等等，目前真正用到的有一个数组嵌套数组去重

```js
/ 操练一下reduce  去重 reduce改变的不是原数组
let arr = [1, 2, 2, 44, 4, 5, 2, 3, 4, 5, 6]
let arr1 = arr.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
console.log(arr1);
// 数组扁平
arr1 = [[1, 2, 3], [2, 3, 4]]
let arr2 = arr1.reduce((acc, cur) => {
    return acc.concat(cur)
}, [])
console.log(arr2)

// 对象分组
const people = [
    { name: 'bbb', age: 21 },
    { name: 'aa', age: 19 },
    { name: 'bbbcc', age: 18 },
    { name: 'bbbcc', age: 18 }
]
function groupBy(array, property) {
    return array.reduce((acc, curr) => {
        const key = curr[property]
        console.log(key);
        const curgroup = acc[key] ?? [] // 去重
        console.log(curgroup);
        return { ...acc, [key]: [...curgroup, curr] }
    }, {})
}
const p1 = groupBy(people, 'age')
console.log(p1);
```

### find

### every | some

### flat()

扁平化数组，将多维数组变成一维数组,只能扁平化一层

```js
let arr = [1, 2, [3, 4], [5, 6, [7, 8]]];
let arr2 = arr.flat();
console.log(arr2); // [1, 2, 3, 4, 5, 6, [7, 8]]
```

### flatMap()

flatMap 相当于 map() + flat()的结合，先 map 再 flat

### string 常用方法合集

#### split

split()就是把字符串根据传入的参数规则进行分割成数组，返回一个数组

```js
let str = "hello word nihao";
let arr = str.split(" ");
console.log(arr); // ["hello", "word", "nihao"]
// 如果是没有参数的话，就是把每个字符都分割成数组
let str = "hello";
let arr = str.split("");
console.log(arr); // ["h", "e", "l", "l", "o"]
// 根据传入参数匹配分割
let str = "hello,word,nihao";
let arr = str.split(",");
console.log(arr); // ["hello", "word", "nihao"]
```

### map 常用方法集合

### 遍历数据结构

- 常用方法 Objet.keys() Object.values() Object.entries() Object.fromEntries()
  这些方法是通用的，有一个共同的约定来将它们用于各种数据结构。如果我们创建一个我们自己的数据结构，我们也应该实现这些方法。

它们支持 Map Set Array

- Object.keys()返回的是一个数组，包含的是所有可枚举属性的键名，即是 key:value 格式的

```js
let obj = {
  name: "blue",
  age: 18,
};
console.log(Object.keys(obj)); // ["name", "age"]
```

- Object.values()返回的是一个数组，包含的是所有可枚举属性的键值，即是 key:value 格式的

```js
let obj = {
  name: "blue",
  age: 18,
};
console.log(Object.values(obj)); // ["blue", 18]
```

- Object.entries() 返回的是一整个数组形式的键值对

```js
let obj = {
  name: "blue",
  age: 18,
};
console.log(Object.entries(obj)); // [["name", "blue"], ["age", 18]]
```

- Object.fromEntries()是将一个数组转换成对象，前提是这个数组是键值对的形式

```js
let arr = [
  ["name", "blue"],
  ["age", 18],
];
console.log(Object.fromEntries(arr)); // {name: "blue", age: 18}
```

- 练习操作

```js
let arr = [
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
];
let doublePrice = Object.fromEntries(
  arr.map(([key,value]=>[key,value*2]))
)
console.log(doublePrice)
```

```

```
