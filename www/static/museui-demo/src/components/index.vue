<template>
  <ul class="menus">
    <li  v-for="item in checkoutList" class="menu-item">
       <mu-raised-button @click="changeindexstate" :href="item.path" :label="item.title" fullWidth/>
   </li>
 </ul>
</template>

<style>
ul{
  list-style-type: none;
}
</style>

<script type="text/babel">
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      checkoutList: 'checkoutList',
      indexstate: 'indexstate'
    })
  },
  methods: {
    ...mapActions({
      changeindexstate: 'changeindexstate'
    })
  }
}
</script>

<style>
  .menus {
    margin: 0;
    padding: 0;
    display: block
  }
  .menu-item {
    padding: 16px;
  }
</style>
