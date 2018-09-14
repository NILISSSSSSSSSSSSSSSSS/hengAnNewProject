import Vue from 'vue'
import Vuex from 'vuex'
import {common} from './index/index'
import {user} from './user/index'
import {setting} from './setting'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    common,
    user,
    setting
  }
})
