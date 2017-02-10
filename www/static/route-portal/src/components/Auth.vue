<template>
  <div class="loading">
    <mu-circular-progress :size="40" :strokeWidth="5"/>
    <div class="loading-text">{{message}}</div>
  </div>
</template>

<style>
  .loading {
    text-align: center;
    margin-top:15px;
  }
  .loading-text {
    text-align: center;
  }

</style>

<script>
import api from '../api/index'
export default {
  data () {
    return {
      message: '认证中...'
    }
  },

  created () {
    let token = this.$route.query.token
    api.auth(token, (data) => {
      if (data && data.errno === 0) {
        this.message = '认证成功，正在跳转...'
        window.location.href = data.data.url
      } else {
        this.message = '认证失败'
      }
    })
  }
}

</script>
