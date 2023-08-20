import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("demo-1", defineAsyncComponent(() => import("C:/Users/31647/Desktop/WEB/vuepress-blog/docs/.vuepress/components/demo-1.vue")))
  },
}
