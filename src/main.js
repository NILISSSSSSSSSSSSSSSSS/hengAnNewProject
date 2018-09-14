// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import utils from './utils/'
import Vant from 'vant'
import VueClipboard from 'vue-clipboard2'
import VueQrcode from 'qrcode.vue'
import 'vant/lib/vant-css/index.css'
import './assets/font/iconfont.css'
import './components/index'
import '@/directives/animation'
import '@/directives/link'
import i18n from './lang'
//  过滤器
import '@/filters/'
Vue.use(Vant)

//  utils工具类
Vue.prototype.utils = utils
Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.component('Qrcode', VueQrcode)

/* eslint-disable no-new */
let $vm = new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})

window.$vm = $vm
