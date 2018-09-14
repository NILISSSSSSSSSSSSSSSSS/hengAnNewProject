import Vue from 'vue'
import wloading from './wLoading.vue'

let instance = new (Vue.extend(wloading))({
  el: document.createElement('div')
})
instance.$el.style.display = 'none'
document.body.appendChild(instance.$el)

const Loading = {}
Loading.$vm = instance

Loading.show = function (message = '', showCover = true) {
  if (message) {
    this.$vm.$props.message = message
  }

  this.$vm.$el.querySelector('.cover').style.display = showCover ? 'inline' : 'none'
  this.$vm.$el.style.display = 'inline'
}
Loading.hide = function () {
  this.$vm.$el.style.display = 'none'
  this.$vm.$props.message = ''
}

Vue.prototype.$loading = Loading
