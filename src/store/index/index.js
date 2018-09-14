import $http from '@/plugins/http'

//  API接口
function getCommon () {
  return $http.get('https://www.otcex.io/common?isPubAdvertise=yes', {
    loading: {
      show: true,
      message: '加载中'
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

const state = {
  common: {}
}
const mutations = {
  GET_COMMON (state, payload) {
    state.common = payload
  }
}
const actions = {
  async GET_COMMON ({commit}, cb) {
    console.log('GET_COMMON')
    let data = await getCommon()
    commit('GET_COMMON', data)
    cb && cb()
  }
}

export const common = {namespaced: true, state: state, mutations: mutations, actions: actions}
