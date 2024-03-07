import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    "text": "前端知识",
    "prefix": "/frontend/",
    icon: "fab fa-square-js",

    "children": [
      {
        "text": "css",
        "prefix": "css/",

        "children": [
          {
            "text": "css",
            "link": "css.md"
          },
          {
            "text": "scss",
            "link": "scss.md"
          },
          {
            "text": "关于在vue项目中全局使用scss变量",
            "link": "关于在vue项目中全局使用scss变量.md"
          }
        ]
      },
      {
        "text": "docker",
        "prefix": "docker/",

        "children": [
          {
            "text": "docker",
            "link": "docker.md"
          },
          {
            "text": "docker部署springboot+mysql",
            "link": "docker部署springboot+mysql.md"
          },

        ]
      },
      {
        "text": "homo",
        "prefix": "homo/",

        "children": [
          {
            "text": "homo入门",
            "link": "homo入门.md"
          },
          {
            "text": "使用第三方库",
            "link": "使用第三方库.md"
          }
        ]
      },
      {
        "text": "javascript",
        "prefix": "javascript/",

        "children": [
          {
            "text": "eslint配置",
            "link": "eslint配置.md"
          },
          {
            "text": "js",
            "link": "js.md"
          },
          {
            "text": "typescript",
            "link": "typescript.md"
          },
          {
            "text": "关于js的深拷贝和浅拷贝",
            "link": "关于js的深拷贝和浅拷贝.md"
          },
          {
            "text": "关于ts",
            "link": "关于ts.md"
          }
        ]
      },
      {
        "text": "nodejs",
        "prefix": "nodejs/",

        "children": [
          {
            "text": "使用node进行反向代理",
            "link": "使用node进行反向代理.md"
          },
          {
            "text": "简单使用express",
            "link": "简单使用express.md"
          }
        ]
      },
      {
        "text": "projects",
        "prefix": "projects/",

        "children": [
          {
            "text": "navigation",
            "link": "navigation.md"
          }, {
            "text": "tiptap",
            "link": "tiptap.md"
          }
        ]
      },
      {
        "text": "README",
        "link": "README.md"
      },
      {
        "text": "vue",
        "prefix": "vue/",
        icon: "fab fa-vuejs",

        "children": [
          {
            "text": "element-plus使用",
            "link": "element-plus使用.md"
          },
          {
            "text": "gsap",
            "link": "gsap.md"
          },
          {
            "text": "pinia",
            "link": "pinia.md"
          },
          {
            "text": "vuebasic",
            "link": "vuebasic.md"
          },
          {
            "text": "vueUse",
            "link": "vueUse.md"
          },
          {
            "text": "vue进阶",
            "link": "vue进阶.md"
          },
          {
            "text": "动态导入方法",
            "link": "动态导入方法.md"
          },
          {
            "text": "构建项目常用npm",
            "link": "构建项目常用npm.md"
          }
        ]
      },
      {
        "text": "前端常用请求",
        "prefix": "前端常用请求/",

        "children": [
          {
            "text": "axios",
            "prefix": "axios/",

            "children": []
          },
          {
            "text": "TS封装axios",
            "link": "TS封装axios.md"
          }
        ]
      },
      {
        "text": "核心理论知识",
        "prefix": "核心理论知识/",

        "children": [

          {
            "text": "浏览器事件循环原理",
            "link": "浏览器事件循环原理.md"
          }
        ]
      },
      {
        "text": "解析html",
        "link": "解析html.md"
      },
      {
        "text": "通配符",
        "link": "通配符.md"
      }
    ]
  },
  {

    text: "后端知识",
    prefix: "/backend/",
    icon: "fas fa-server",
    children: [
      {
        "text": "java",
        "prefix": "/backend/java/",

        "children": [
          {
            "text": "springboot",
            "link": "springboot.md"
          }
        ]
      },
      {
        "text": "python",
        "prefix": "/backend/python/",

        "children": [
          {
            "text": "安装autopy时踩得坑以及经验",
            "link": "autopy.md"
          }
        ]
      },
      {
        "text": "README",
        "link": "README.md"
      },
      {
        "text": "数据库",
        "prefix": "/backend/数据库/",

        "children": [
          {
            "text": "数据库命名规范",
            "link": "数据库规范.md"
          },
          {
            "text": "数据库的有关报错",
            "link": "数据库的有关报错.md"
          }
        ]
      }
    ],

  },
  {
    "text": "计算机基础",
    "prefix": "计算机基础/",
    icon: "fas fa-laptop-code",
    "children": [
      {
        "text": "作为一个萌新应该如何“正确”的入门",
        "link": "作为一个萌新应该如何“正确”的入门.md"
      },
      {
        "text": "操作系统",
        "prefix": "操作系统/",

        "children": [
          {
            "text": "操作系统复习",
            "link": "操作系统复习.md"
          },
          {
            "text": "读者写者问题",
            "link": "读者写者问题.md"
          },
          {
            "text": "进程，线程",
            "link": "进程，线程.md"
          }
        ]
      },
      {
        "text": "数据库系统",
        "prefix": "数据库系统/",

        "children": [

          {
            "text": "数据库原理",
            "link": "数据库原理.md"
          },
          {
            "text": "数据库原理期末复习",
            "link": "数据库原理期末复习.md"
          }
        ]
      }
    ]
  },

  "/demo/",

  "/timeline/",
]);
