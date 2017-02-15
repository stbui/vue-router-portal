<template>
    <div>
  <div class="wrapper">
    <mu-text-field label="手机号码" v-model="user.username" hintText="请输入手机号码" labelFloat fullWidth/>
    <mu-text-field label="密码" v-model="user.password" hintText="请输入密码" type="password" labelFloat fullWidth/>
    <mu-raised-button label="授权" v-on:click="loginUser()" primary fullWidth/>
    
    <mu-row gutter>
        <mu-col class="link" width="100" tablet="50" desktop="33"><a href="/wx">微信登录</a></mu-col>
    </mu-row>
    
  </div>
   <div class="start">
        <mu-flexbox>
            <mu-flexbox-item order="2" class="flex-demo">
                <a href="/verify">体验临时上网</a>
            </mu-flexbox-item>
        </mu-flexbox>
    </div>

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
  .link {
      text-align: center;
      margin: 10px
  }

  .start {
      position: fixed;
      bottom: 50px;
      width: 100%;
      padding: 0 8px;
     
  }

  .flex-demo {
    text-align: center;

    
  }

  .flex-demo a {
        color:#999;
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
  created () {
    if (this.$route.query.gw_id !== undefined) {
      window.localStorage.setItem('rp-info', JSON.stringify(this.$route.query))
      this.$cookie.set('rp-info', JSON.stringify(this.$route.query))
    }
  },
  methods: {
    loginUser: function () {
      api.verifyDevice(this.user, (data) => {
        switch (data && data.errno) {
          case 0:
            this.$router.replace('/verify?message=allow')
            break
          case 1:
            console.log('新注册')
            this.$router.replace('/verify?message=allow')
            break
          default:
            this.dialog = true
            this.dialogMsg = data.errmsg || '系统没有反应过来，请再试试！'
            break
        }
      })
    },
    close () {
      this.dialog = false
    }
  }
}

</script>
