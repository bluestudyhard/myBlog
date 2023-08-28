export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6e19edb7","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53","v-b97800d2","v-cf5f91ec","v-4b185ec6","v-50af5219","v-48242312","v-9aa86600"]}},"star":{"/":{"path":"/star/","keys":["v-6e19edb7"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6e19edb7"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

