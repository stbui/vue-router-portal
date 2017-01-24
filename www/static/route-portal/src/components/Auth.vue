<template>
  <div class="loading">
    <mu-circular-progress :size="40" :strokeWidth="5"/>
    <div class="loading-text">认证中...</div>
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
  created () {
    let cookie = this.$cookie.get('rp-info')
    let {gw_address, gw_port} = JSON.parse(cookie)
    let url = `http://${gw_address}:${gw_port}/wifidog/auth?token=4b09611ed4feb691d61d771b31ae5d60`
    window.location.href = url
  }
}

</script>
