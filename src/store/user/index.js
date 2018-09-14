import $http from '@/plugins/http'
import { setItem, getItem } from '@/utils/storage'
import { validateToken } from '@/api/user'

//  API接口
function getCommon () {
  return $http.get('https://www.otcex.io/common?isPubAdvertise=yes').then(res => {
    return Promise.resolve(res.data)
  })
}

let tokenStorage = getItem('token') || null
const tokenExpireDay = 7 // token七天过期
let token = ''
// 如果本地token没有过期的话,每次进入App就刷新登录token
if (tokenStorage !== null) {
  let createDate = new Date(tokenStorage.createDate) // createDate存储的毫秒数
  let expireDate = new Date(tokenStorage.createDate + tokenExpireDay * 24 * 3600 * 1000)
  if (new Date() < expireDate) {
    // 每天最多只刷新一次。如果用户连续七天没有重新开启APP登录token就自动过期
    token = tokenStorage.token
    if (createDate.toLocaleDateString() !== new Date().toLocaleDateString()) {
      validateToken(tokenStorage.token).then(res => {
        if (res.success && res.data.token) {
          token = res.data.token
          setItem('token', {
            token: token,
            createDate: new Date()
          })
        }
      })
    }
  } else {
    setItem('token', '')
  }
}

const state = {
  common: {},
  token: token
}
const mutations = {
  GET_COMMON (state, payload) {
    state.common = payload
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  CLEAR_TOKEN (state) {
    state.token = ''
  }
}
const actions = {
  async GET_COMMON ({ commit }, cb) {
    console.log('GET_COMMON')
    let data = await getCommon()
    commit('GET_COMMON', data)
    cb && cb()
  },
  SET_TOKEN ({ commit }, token) {
    setItem('token', {
      token: token,
      createDate: new Date().getTime()
    })
    commit('SET_TOKEN', token)
  },
  CLEAR_TOKEN ({ commit }) {
    setItem('token', '')
    commit('CLEAR_TOKEN')
  }
}

export const user = { namespaced: true, state: state, mutations: mutations, actions: actions }
