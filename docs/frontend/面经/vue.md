## 怎么实现自动注册组件

## 路由

### 如何自动注册路由

这里利用一下 import.meta.glob,它会在编译时

```js
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [];
// 动态的注册路由，不用每次手动添加路由
function importViews() {
  const views = import.meta.glob("../views/*.vue");

  for (const path in views) {
    const name = path.match(/\.\/views(.*)\.vue$/)?.[1]?.toLowerCase();
    // console.log(path.match(/\.\/views(.*)\.vue$/), views);
    if (!name) return; // 可能name为undefined
    routes.push({
      path: name === "/home" ? "/" : name,
      component: views[path],
    });
  }
}
importViews();

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
export { routes };
```
