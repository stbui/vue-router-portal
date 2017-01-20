<template>
<div class="container">
  <div v-if="bottomNav == 'movies'"><mu-table>
  <mu-thead>
    <mu-tr>
      <mu-th>ID</mu-th>
      <mu-th>Name</mu-th>
      <mu-th>Status</mu-th>
    </mu-tr>
  </mu-thead>
  <mu-tbody>
    <mu-tr>
      <mu-td>1</mu-td>
      <mu-td>John Smith</mu-td>
      <mu-td>Employed</mu-td>
    </mu-tr>
    <mu-tr>
      <mu-td>2</mu-td>
      <mu-td>Randal White</mu-td>
      <mu-td>Unemployed</mu-td>
    </mu-tr>
    <mu-tr>
      <mu-td>3</mu-td>
      <mu-td>Stephanie Sanders</mu-td>
      <mu-td>Employed</mu-td>
    </mu-tr>
    <mu-tr>
      <mu-td>4</mu-td>
      <mu-td>Steve Brown</mu-td>
      <mu-td>Employed</mu-td>
    </mu-tr>
  </mu-tbody>
</mu-table>
</div>

<div v-if="bottomNav == 'music'">
<div class="demo-infinite-container">
   <mu-list>
    <template v-for="item in list">
      <mu-list-item :title="item"/>
      <mu-divider/>
    </template>
  </mu-list>
  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
</div>
</div>

<div v-if="bottomNav == 'books'">
  <mu-text-field label="账号" fullWidth hintText="请输入账号" type="text" labelFloat/><br/>

  <mu-text-field label="密码" fullWidth hintText="请输入密码" type="password" labelFloat/><br/>
 <mu-time-picker hintText="时间选择" labelFloat fullWidth/><br/>
  <mu-checkbox label="自定义icon" class="demo-checkbox" uncheckIcon="favorite_border" checkedIcon="favorite" fullWidth/> <br/>


</div>

<div v-if="bottomNav == 'pictures'">
  <div class="demo-vsteper-container">
  <mu-stepper :activeStep="activeStep" orientation="vertical">
    <mu-step>
      <mu-step-label>
        选择活动地点
      </mu-step-label>
      <mu-step-content>
        <p>
          在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
        </p>
        <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
      </mu-step-content>
    </mu-step>
    <mu-step>
      <mu-step-label>
        创建一个群组
      </mu-step-label>
      <mu-step-content>
        <p>
          创建群组，50人左右，以18-25单身青年为主。。。。。
        </p>
        <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
        <mu-flat-button label="上一步" class="demo-step-button" @click="handlePrev"/>
      </mu-step-content>
    </mu-step>
    <mu-step>
      <mu-step-label>
        宣传活动
      </mu-step-label>
      <mu-step-content>
        <p>
          多在群里发消息宣传宣传，有事没事多在群里唠唠嗑，确定的话就ok拉
        </p>
        <mu-raised-button label="完成" class="demo-step-button" @click="handleNext" primary/>
        <mu-flat-button label="上一步" class="demo-step-button" @click="handlePrev"/>
      </mu-step-content>
    </mu-step>
  </mu-stepper>
  <p v-if="finished">
    都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
  </p>
</div>

</div>

<div class="footbar">
  <mu-paper style="max-width: 376px; ">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
      <mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
      <mu-bottom-nav-item value="books" title="Books" icon="books"/>
      <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
    </mu-bottom-nav>
  </mu-paper>
</div>
</div>



</template>

<script>
export default {
  data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push('item' + (i + 1))
    }
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies',
      list,
      num: 10,
      loading: false,
      scroller: null,
      activeStep: 0
    }
  },
  computed: {
    finished () {
      return this.activeStep > 2
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 10; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 10
        this.loading = false
      }, 2000)
    },
    handleNext () {
      this.activeStep++
    },
    handlePrev () {
      this.activeStep--
    },
    reset () {
      this.activeStep = 0
    }
  },
  mounted () {
    this.scroller = this.$el
  }
}
</script>

<style lang="css">
.footbar{
  position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;

} 
.demo-infinite-container{
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}
.demo-vsteper-container{
  max-width: 380px;
  max-height: 400px;
  margin: auto;
}

.demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
}
</style>