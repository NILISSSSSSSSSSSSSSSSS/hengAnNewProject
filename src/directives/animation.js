//  v-animation指令说明
//  传参：指令绑定值，Object, {dir 移动像素, time 移动时间.默认0.5s}
//  使用例子 v-animation={dir: 10px, time: 1s}
import Vue from 'vue'
export const animation = Vue.directive('animation', {
  // 当绑定元素插入到 DOM 中。
  componentUpdated: function (el, binding, vnode) {
    // console.log(binding)
    // let directions = ['left', 'right', '']
    // let direction = binding.value.dir
    let distance = binding.value.distance || 'row'
    // if (directions.indexOf(direction) === -1) {
    //   throw new Error('v-animation指令值参数错误')
    // }

    // console.log(Object.keys(binding.modifiers))
    let time = binding.value.time || '0.5s'
    el.style.transition = 'all ' + time
    el.style.transform = 'translate(' + distance + ')'
    // switch (direction) {
    //   case 'left':
    //     el.style.transform = 'translateX(-101px)'
    //     break
    //   case 'right':
    //     el.style.transform = 'translateX(101px)'
    //     break
    //   default:
    //     console.log('不移动')
    // }
  }
})
