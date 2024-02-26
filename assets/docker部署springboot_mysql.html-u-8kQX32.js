import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-xEYoAD2G.js";const o="/assets/image-9pbjbEZ6.png",i={},l=e(`<h2 id="用-docker-部署-mysql-和-springboot" tabindex="-1"><a class="header-anchor" href="#用-docker-部署-mysql-和-springboot" aria-hidden="true">#</a> 用 docker 部署 mysql 和 springboot</h2><p>docker init 没带 springboot 玩，所以得自己配置</p><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><p>首先在 sb 的根目录下创建 Dockerfile，然后编写一些基础的配置<br> 其实在这里重点关注 jdk 版本，然后工作路径，copy 的名字，可以直接写成 xx.jar 后面是打包后的名字 app.jar<br> 我们常规来说要先打包 jar 才能 compose 那么其实可以在 dockerfile 里面直接写 RUN sh./mvnw package 就可以打包了</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># syntax=docker/dockerfile:1</span>

<span class="token instruction"><span class="token keyword">FROM</span> openjdk:17-jdk-alpine <span class="token keyword">as</span> base</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token instruction"><span class="token keyword">RUN</span> sh ./mvnw package -DskipTests</span>

<span class="token instruction"><span class="token keyword">FROM</span> openjdk:17-jdk-alpine <span class="token keyword">as</span> prod</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">ARG</span> APPNAME=navigations</span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">base</span></span> /app/target/<span class="token variable">$APPNAME</span>.jar app.jar</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>

<span class="token instruction"><span class="token keyword">ENV</span> JAVA_OPTS=<span class="token string">&quot;\\
  -server \\
  -Xms256m \\
  -Xmx512m \\
  -XX:MetaspaceSize=256m \\
  -XX:MaxMetaspaceSize=512m&quot;</span></span>

<span class="token instruction"><span class="token keyword">ENV</span> PARAMS=<span class="token string">&quot;&quot;</span></span>

<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;sh&quot;</span>,<span class="token string">&quot;-c&quot;</span>,<span class="token string">&quot;java -jar $JAVA_OPTS app.jar $PARAMS&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最为关键的-docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#最为关键的-docker-compose-yml" aria-hidden="true">#</a> 最为关键的 docker-compose.yml</h3><p>springboot application.yml<br> 由于 mysql 在 docker 上部署后这个端口和在本地上跑是不一样的，如果在本地跑默认就连到 3306，但是在 docker 上是需要我们制定 MYSQL_URL 的，所以在 application 这里需要把 url 改成变量的形式<br> 然后在 java 的 environment 里面是不用写什么 username，rootname 什么的，会根据 application 自动补齐<br><strong>最重要的是要在 environment 里，把 url 替换成这种形式</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  environment<span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token constant">MYSQL_URL</span><span class="token operator">=</span>jdbc<span class="token operator">:</span>mysql<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>db<span class="token operator">-</span>mysql<span class="token operator">/</span>navigation<span class="token operator">?</span>useUnicode<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">&amp;</span>characterEncoding<span class="token operator">=</span>utf<span class="token operator">-</span><span class="token number">8</span><span class="token operator">&amp;</span>useSSL<span class="token operator">=</span><span class="token boolean">false</span><span class="token operator">&amp;</span>serverTimezone<span class="token operator">=</span><span class="token constant">GMT</span><span class="token operator">%</span><span class="token number">2</span><span class="token constant">B8</span><span class="token operator">&amp;</span>rewriteBatchedStatements<span class="token operator">=</span><span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>db-mysql 表示依赖的 mysql 镜像名称<br> depends_on 要注意一下，就是要等 mysql 服务启动完了以后我才启动 java 服务，不然就连不上了</p><ul><li><strong>重点在于 mysql</strong><br> mysql，不需要写 mysql_username 不然会提示找不到，这个会自动补齐的，写 rootname 就好<br> 然后很重要一点，<br> 要预先把初始化数据库的 sql 准备好，然后在 volume 加上 - ./init.sql:/docker-entrypoint-initdb.d/init.sql</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token operator">:</span>
  datasource<span class="token operator">:</span>
    url<span class="token operator">:</span> $<span class="token punctuation">{</span><span class="token constant">MYSQL_URL</span><span class="token operator">:</span>jdbc<span class="token operator">:</span>mysql<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3306</span><span class="token operator">/</span>navigation<span class="token operator">?</span>useUnicode<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">&amp;</span>characterEncoding<span class="token operator">=</span>utf<span class="token operator">-</span><span class="token number">8</span><span class="token operator">&amp;</span>useSSL<span class="token operator">=</span><span class="token boolean">false</span><span class="token operator">&amp;</span>serverTimezone<span class="token operator">=</span><span class="token constant">GMT</span><span class="token operator">%</span><span class="token number">2</span><span class="token constant">B8</span><span class="token operator">&amp;</span>rewriteBatchedStatements<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">}</span>
    username<span class="token operator">:</span> root
    password<span class="token operator">:</span> root
    driver<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">-</span>name<span class="token operator">:</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>cj<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span>Driver</span>
    hikari<span class="token operator">:</span>
      initialization<span class="token operator">-</span>fail<span class="token operator">-</span>timeout<span class="token operator">:</span> <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>version: &quot;3.8&quot;
services:
  <span class="token comment"># 定义web服务</span>
  client:
    image: blue-navigation-management-server
    container_name: blue-navigation-management
    ports:
      - &quot;4173:4173&quot;
    environment:
      API_URL: http://localhost:8080
  springboot-app:
    <span class="token comment"># 构建镜像的路径</span>
    build:
      context: .
      dockerfile: Dockerfile
    container_name: springboot-app
    ports:
      - &quot;8080:8080&quot;
    environment:
      - MYSQL_URL=jdbc:mysql://db-mysql/navigation?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&amp;serverTimezone=GMT%2B8&amp;rewriteBatchedStatements=true
    depends_on:
      - db-mysql

    <span class="token comment">#定义mysql服务</span>
  db-mysql:
    image: mysql:8.0.28
    container_name: db-mysql
    <span class="token comment">#restart: always 表示容器退出时总是重启</span>
    <span class="token comment">#    restart: always</span>
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: navigation
      MYSQL_PASSWORD: root
    <span class="token comment"># ports: 表示将容器的端口映射到宿主机的端口 13306表示宿主机的端口 3306表示容器的端口</span>
    volumes:
      - mysql-data:/var/lib/mysql
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - &quot;4406:3306&quot;
    healthcheck:
      test: [ CMD, mysqladmin, ping, -h, localhost ]
      interval: 10s
      timeout: 5s
      retries: 5
volumes:
  mysql-data:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目结构</p><figure><img src="`+o+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>',14),t=[l];function r(p,c){return s(),a("div",null,t)}const m=n(i,[["render",r],["__file","docker部署springboot_mysql.html.vue"]]);export{m as default};
