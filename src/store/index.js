import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
    orderList:[]
  },
  getters: {
  },
  mutations: {
    mutationsCartList(state,list){
      return state.cartList=list
    },
    mutationsOrderList(state, list){
      return state.orderList=list
    }
  },
  actions: {
  },
  modules: {
  }
})
