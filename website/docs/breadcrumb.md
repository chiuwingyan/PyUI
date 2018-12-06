<style>
    .py-breadcrumb{
      margin-bottom:10px;
    }
</style>

## Breadcrumb 面包屑

显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。

### 基础用法

::: demo 最基础的用法，通过设置 `to`属性添加链接。

```html
<div>
     <py-breadcrumb>
        <py-breadcrumb-item to="/">Home</py-breadcrumb-item>
        <py-breadcrumb-item to="/components/breadcrumb">Components</py-breadcrumb-item>
        <py-breadcrumb-item>Breadcrumb</py-breadcrumb-item>
    </py-breadcrumb>
</div>
```

:::

### 带图标的

可自定义每项的内容，比如带有一个图标。

::: demo 

```html
<div>
    <py-breadcrumb>
        <py-breadcrumb-item to="/">
            <py-icon type="close"></py-icon> Home
        </py-breadcrumb-item>
        <py-breadcrumb-item to="/components/breadcrumb">
            <py-icon type="close"></py-icon> Components
        </py-breadcrumb-item>
        <py-breadcrumb-item>
            <py-icon type="close"></py-icon> Breadcrumb
        </py-breadcrumb-item>
    </py-breadcrumb>
</div>
```

:::

### 分隔符


::: demo 通过设置 `separator` 属性来自定义分隔符，比如`<`，也可以接受自定义的HTML字符串。

```html
<style>
.demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
}
</style>
<template>
    <py-breadcrumb separator=">">
        <py-breadcrumb-item to="/">Home</py-breadcrumb-item>
        <py-breadcrumb-item to="/components/breadcrumb">Components</py-breadcrumb-item>
        <py-breadcrumb-item>Breadcrumb</py-breadcrumb-item>
    </py-breadcrumb>
    <py-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <py-breadcrumb-item to="/">Home</py-breadcrumb-item>
        <py-breadcrumb-item to="/components/breadcrumb">Components</py-breadcrumb-item>
        <py-breadcrumb-item>Breadcrumb</py-breadcrumb-item>
    </py-breadcrumb>
</template>
```

:::


### Breadcrumb Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| separator   | 自定义分隔符     | String / Element String  | -                             | —      |

### BreadcrumbItem Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| to   | 链接，不传则没有链接，支持 vue-router 对象     | String/Object | -  | -                              |
| replace   | 路由跳转时，开启 replace 将不会向 history 添加新记录     | Boolean | -  | false                  |  
| target   | 相当于 a 链接的 target 属性	     | String | -  | _self                |  
