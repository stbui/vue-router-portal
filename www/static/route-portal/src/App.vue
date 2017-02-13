<template>
  <div id="app">
    <mu-appbar :title="title" fullWidth>
      <mu-icon-button v-if="arrow" icon="arrow_back" @click="back" slot="left"/>
    </mu-appbar>
     <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index'
import { mapGetters } from 'vuex'
import router from './router'
export default {
  name: 'app',
  components: {
    index
  },
  created () {
    if (this.$router.history.current.fullPath === '/') {
      this.arrow = false
    }
  },
  data () {
    return {
      arrow: true,
      title: '上网授权'
    }
  },
  computed: {
    ...mapGetters({
      checkoutindexstate: 'checkoutindexstate'
    })
  },
  methods: {
    back: function () {
      console.log(1)
      if (this.$router.history.current.fullPath !== '/') {
        router.back()
      }
    }
  }
}
</script>

<style>
.mu-appbar-title{
  /* 标题不要居中显示*/
  text-align: center;
}
</style>
