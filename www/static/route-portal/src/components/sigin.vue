<template>
  <div class="wrapper">
    <mu-text-field label="用户名" v-model="user.username" hintText="请输入用户名" labelFloat fullWidth/>
    <mu-text-field label="密码" v-model="user.password" hintText="请输入密码" type="password" labelFloat fullWidth/>
    <mu-raised-button label="登录" v-on:click="addUser()" primary fullWidth/>
  </div>
</template>

<style>
  .wrapper {
     padding:0 15px;
  }

</style>

<script>
import api from '../api/index'
export default {
  data () {
    return {
      value: '默认文字',
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    addUser: function () {
      api.register(this.user, () => {
        console.log(api)
      })
    }
  }
}

</script>
