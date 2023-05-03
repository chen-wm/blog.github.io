---
layout: Post
title: Disable Comments
author: Chen
date: 2022-07-29
useHeaderImage: true
headerImage: /img/in-post/2018-02-17/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 配置
---

Demo of how to disable comments.

<!-- more -->

To disable comments for some post, just set `vssue: false` in the frontmatter.

Here is the frontmatter of current demo:

```yaml {7}
---
category: demo
tags:
  - en
date: 2022-01-20
title: Disable Comments
vssue: false
---
```

So Vssue is disabled on this page, and no comments display below :wink:.
