export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"主页\",\"bgImageStyle\":null,\"heroImage\":\"/assets/images/miao.jpg\",\"heroText\":\"Welcome to my blog\",\"tagline\":\"just daily study record 📌\",\"plugins.blog\":true,\"features\":[{\"title\":\"测试\",\"details\":\"test\",\"link\":\"/demo/\"},{\"title\":\"前端知识\",\"details\":\"love 大前端\",\"link\":\"/frontend/\"}],\"footer\":\"theme by vuepress-theme-hope\",\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.77,\"words\":230},\"filePathRelative\":\"README.md\",\"excerpt\":\"<!-- 这是一个博客主页的案例。\\n\\n要使用此布局，你应该在页面前端设置 `layout: BlogHome` 和 `home: true`。\\n\\n相关配置文档请见 [博客主页](https://theme-hope.vuejs.press/zh/guide/blog/home/)。 -->\\n<!-- 为什么在这里用不了html和vue -->\\n<!--\\n这是一个\\n多行注释\\n-->\\n\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
