<template>
  <div class="wrapper">
    <mu-text-field label="手机号码" v-model="user.username" hintText="请输入手机号码" labelFloat fullWidth/>
    <mu-text-field label="密码" v-model="user.password" hintText="请输入密码" type="password" labelFloat fullWidth/>
    <mu-raised-button label="绑定" v-on:click="addUser()" primary fullWidth/>
    <mu-dialog :open="dialog" title="提示">
      {{dialogMsg}}
      <mu-flat-button label="确定" slot="actions" primary @click="close"/>
    </mu-dialog>
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
      value: '',
      dialog: false,
      dialogMsg: '',
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    addUser: function () {
      api.register(this.user, (data) => {
        if (data && data.errno === 0) {
          this.$router.replace('/')
        } else {
          this.dialog = true
          this.dialogMsg = '系统没有反应过来，请再试试！'
        }
      })
    },
    close () {
      this.dialog = false
    }
  }
}

</script>
