import Vue from 'vue'
Vue.filter('currency', function (arg) {
  return arg && Number(arg).toFixed(2)
})
