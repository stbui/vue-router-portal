<template>
  <div class="wrapper">
    <div class="redirect">
      正在跳转：<a :href="link">{{link}}</a>
    </div>
    <mu-row gutter>
    <mu-col width="100" tablet="50" desktop="33"><a href="https://www.baidu.com/">百度</a></mu-col>
    <mu-col width="100" tablet="50" desktop="33"><a href="https://www.so.com/">360搜索</a></mu-col>
  </mu-row>
  </div>
</template>

<style>
  .redirect {
    text-align: center;
    margin: 10px;
  }
</style>

<script>
export default {
  data () {
    return {
      link: 'http://stbui.com'
    }
  },
  created () {
    this.link = 'https://www.baidu.com/'
  }
}
</script>