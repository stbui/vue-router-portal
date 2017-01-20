<template>
  <div id="app">
    <mu-appbar title="" fullWidth>
      <mu-icon-button  icon="arrow_back" @click="back" slot="left"/>
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
  computed: {
    ...mapGetters({
      checkoutindexstate: 'checkoutindexstate'
    })
  },
  methods: {
    back: function () {
      router.back()
    }
  }
}
</script>

<style>
.mu-appbar-title{
  /* 标题不要居中显示*/
}
</style>
