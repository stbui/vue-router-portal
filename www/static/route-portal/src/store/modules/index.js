import * as types from '../mutation'
const state = {
  index: true,
  list: [
    {path: '/wx', title: '微信'},
    {path: '/register', title: '手机认证'},
    {path: '/sigin', title: '手机登录'},
    {path: '/verify', title: '一键上网'}
  ]
}

// getters
const getters = {
  checkoutList: state => state.list,
  checkoutindexstate: state => state.index
}
const mutations = {
  [types.CHANGE_INDEX_STATE] (state) {
    state.index = !state.index
  }
}
export default {
  state,
  getters,
  mutations
}
