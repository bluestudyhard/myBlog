## 前提思想，理解java项目中的几种层
### 实体层对应到数据库里的实体类来理解

### dao层对应到数据库里的表来理解

### service层对应到业务逻辑来理解

### controller层，直接与前端交互，为前端提供接口

### mapper层，是dao层的实现，是mybatis的一种实现方式，在mapper层里使用sql语句

## mybatis+mysql

## 使用 mybatisplus

### 在 controller 中

```java 
package com.example.demo2.controller;

import com.example.demo2.entity.MyList;
import com.example.demo2.dao.ToDoList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// controller 写的是操作方法
@RestController
public class ToDoListController {

    // 引入mapper
    @Autowired
    private ToDoList toDoList;

    @GetMapping("/todo")
    public List<MyList> getTodoList() {
        List<MyList> list = toDoList.selectList(null);
        return list;
    }

    @PostMapping("/todo")
    public String addTodoList(@RequestBody MyList list) {
        System.out.println(list);
        int flag = toDoList.insert(list);
        if (flag > 0) return "插入成功";
        else return "插入失败";
    }

    @DeleteMapping("/todo/{id}")
    public String deleteTodoList(@PathVariable int id) {
        int flag = toDoList.deleteById(id);
        if (flag > 0) {
            return "删除成功";
        } else {
            return "删除失败";
        }
    }

    @PutMapping("/todo/{id}")
    public String updateTodoList(@PathVariable int id, @RequestBody MyList updatedList) {
        updatedList.setId(id);
        int flag = toDoList.updateById(updatedList);
        if (flag > 0) {
            return "更新成功";
        } else {
            return "更新失败";
        }
    }
}

```

#### 简单跨域请求

```java 
//config/config.java 中
package com.example.demo2.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        // 使用通配符* 允许所有的域请求
        corsConfiguration.addAllowedOrigin("*");
        // 使用通配符* 允许所有请求头字段
        corsConfiguration.addAllowedHeader("*");
        // 使用通配符* 允许所有请求头方法类型
        corsConfiguration.addAllowedMethod("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // 处理请求映射
        source.registerCorsConfiguration("/**", corsConfiguration);

        return new CorsFilter(source);
    }
}
```

## 常见报错分析与解决

### 使用mapper的xml文件没有在配置文件里配置，框架找不到xml文件

```java  
Invalid bound statement (not found): com.example.navigation.mapper.UserMapper.update
at org.apache.ibatis.binding.MapperMethod$SqlCommand.<init>(MapperMethod.java:229) ~[mybatis-3.5.13.jar:3.5.13]
at com.baomidou.mybatisplus.core.override.MybatisMapperMethod.<init>(MybatisMapperMethod.java:50) ~[mybatis-plus-core-3.5.3.1.jar:3.5.3.1]
at
```
解决：
![](images/20231026175544.png)


查询查到脏数据
![](images/20231026180824.png)