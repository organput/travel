import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex) // 这行代码必须在创建 store 之前调用

export default new Vuex.Store({
  state,
  mutations
})
