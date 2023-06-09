---
layout: Post
title: Github在线部署项目
subtitle: 测试预览
author: Chen
date: 2023-03-12
useHeaderImage: true
headerImage: /img/in-post/header-image-01.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 部署
---

#### 记录第一次部署github demo配置github pages的踩坑过程 :zipper_mouth_face:

### 一、新建vuepress项目

[vuepress构建](https://www.vuepress.cn/)

```` js
mkdir blog && cd blog
npm install vuepress vuepress-theme-meteorlxy
创建 `src/_posts` 文件夹和 Vuepress 配置文件，项目结构大致为：
BLOG project: 
├── src # Blog 源文件目录
│   ├── .vuepress # Vuepress 目录
│   │   └── config.js # Vuepress 配置文件
│   └── _posts # 博客文件夹
│       ├── xxx.md
│       ...
└── package.json
````

具体配置参照[vuepress官网](https://www.vuepress.cn/)
<br/>

### 二、github配置origin repo

#### 1.创建仓库，如下图

<img :src="$withBase('/img/in-post/repo1.jpg')" alt="repo1">
<br/>

#### 2.关联origin repo，如下图

<img :src="$withBase('/img/in-postrepo2.jpg')" alt="repo1">
<br/>

### 三、构建自动化脚本

```js
BLOG
project:
  ├── src
#
Blog
源文件目录
│   ├── .
vuepress
#
Vuepress
目录
│   │   └── config.js
#
Vuepress
配置文件
│   └── _posts
#
博客文件夹
│       ├── xxx.md
│       ...
└── package.json
└── deploy.sh //新增脚本
```

::: tip

#### 1.新增deploy.sh脚本

#### 2.packjson新增打包命令

#### 3.git bash 执行脚本，repo仓库将新增gh-pages分支以存放打包后的dist文件夹，用于github pages部署分支

:::

```` js
//deploy.sh
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

npm run build
git add docs/.vuepress/dist
git commit -m 'commitmsg'
git push
git subtree push --prefix docs/.vuepress/dist origin gh-pages

````

<img src="/img/in-post/sh.jpg" alt="sh">

<img :src="$withBase('/img/in-post/sh2.jpg')" alt="sh2">

### 四、如图操作，等待actions部署完毕即可访问

<img :src="$withBase('/img/in-post/sh3.jpg')" alt="sh3">

<br/>
