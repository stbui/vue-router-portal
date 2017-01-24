<template>
<div>
<mu-appbar title="Title">
  <mu-icon-button icon='menu' slot="left"/>
  <mu-icon-button icon='expand_more' slot="right"/>
</mu-appbar>
<br>

  <mu-appbar title="Title">
    <mu-icon-button icon="close" slot="left"/>
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="菜单 1"/>
      <mu-menu-item title="菜单 2"/>
      <mu-menu-item title="菜单 3"/>
      <mu-menu-item title="菜单 4"/>
      <mu-menu-item title="菜单 5"/>
    </mu-icon-menu>
  </mu-appbar>
<br>

<mu-appbar title="Title">
  <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
  <mu-flat-button color="white" label="flat Button" slot="right"/>
</mu-appbar>
</div>
</template>

<style lang="less">

</style>
