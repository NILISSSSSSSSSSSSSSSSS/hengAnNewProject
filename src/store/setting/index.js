const state = {
  phone: {},
  isBind: null
}

const mutations = {
  setPhone (state, obj) {
    state.phone = obj
  },
  setIsBind (state, obj) {
    state.isBind = obj
  }
}

const getters = {
  phone (state) {
    return state.phone
  },
  isBind (state) {
    return state.isBind
  }
}

export const setting = {namespaced: true, state, mutations, getters}
