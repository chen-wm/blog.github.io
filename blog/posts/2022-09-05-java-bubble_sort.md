---
layout: Post
title: Java排序算法 —— 冒泡排序
subtitle: 测试预览
author: Chen
date: 2022-09-05
useHeaderImage: true
headerImage: /img/in-post/2020-09-04/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - Java
---
#### Java数组排序——冒泡排序（Bubble Sort）实现
::: tip
实现思路：遍历数组，前后进行对比，arr[j] > arr[j+1]，则将大的那项赋值给j+1，小项给j，继续循环下去依次排序
:::
```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {9,3,2,10,4,6};
        for(int i = 0; i < arr.length; i++) {
            for(int j = 0; j < arr.length - i -1; j ++){
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        for (int i:arr) {
            System.out.println(i);
        }
        // 2,3,4,6,9,10
    }
}

```
