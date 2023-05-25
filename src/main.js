import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//导入rem单位适配
import "amfe-flexible/index.js"

//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';





//导入axios

import axios from 'axios'
import VueAxios from 'vue-axios'
//导入mockjs的服务端数据配置
import "../data/mock.js"

//导入公共样式
import "./assets/css/style.css"
Vue.use(VueAxios, axios)


Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
