<template>
  <div class="wrapper">
    <div class="redirect">
      {{timer}}秒后跳转：<a :href="link">{{link}}</a>
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
    const {url} = JSON.parse(this.$cookie.get('rp-info'))
    this.link = url
    this.timer = 10
    window.setInterval(() => {
      this.timer--
      if (this.timer === 0) {
        window.location.href = url
      }
    }, 1000)
  }
}
</script>