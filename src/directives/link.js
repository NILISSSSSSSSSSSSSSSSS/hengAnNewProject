//  v-link指令说明
//  传参：路由地址
import Vue from 'vue'
import router from '@/router/'
export const animation = Vue.directive('link', {
  // 当绑定元素插入到 DOM 中。
  bind: function (el, binding, vnode) {
    let path = binding.value
    el.addEventListener('click', function () {
      router.push(path)
    })
  },
  unbind: function (el) {
    el.removeEventListener('click', function () {

    })
  }
})
