<template>
  
  <mu-flexbox justify="center" style="height: 500px">
    <mu-flexbox-item order="2" class="flex-demo">
       跳转到微信
    </mu-flexbox-item>
    </mu-flexbox>

</template>

<style>
  .message {
    text-align:center;
    padding:8px 0;
  }

</style>
<script>
  export default {
    created () {
      let appId = 'wxea5e7feb9b9620f5'
      let extend = 'demoNew'
      let timestamp = +new Date()
      let shop_id = '4145975'
      let authUrl = 'http://192.168.1.165/wx/auth'
      let mac = 'aa:aa:aa:aa:aa:aa'
      let ssid = '431103.com'
      let bssid = 'ff:ff:ff:ff:ff:ff'
      let secretkey = '0842fbf43c7ed11e0fd0bc664416add6'
      let sign = window.md5(appId + extend + timestamp + shop_id + authUrl + mac + ssid + bssid + secretkey)
      window.Wechat_GotoRedirect(appId, extend, timestamp, sign, shop_id, authUrl, mac, ssid, bssid)
    }
  }
</script>