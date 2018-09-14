import axios from 'axios'
import { url } from '../config/server'
const instance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 20000
})

instance.interceptors.request.use(function (config) {
  debugger
  // Do something before request is sent
  if (window.$vm.$store.state.user.token) {
    config.headers.token = window.$vm.$store.state.user.token
  }
  if (config.loading) {
    if (typeof (config.loading) === 'boolean') {
      window.$vm.$loading.show()
    } else if (typeof (config.loading) === 'object') {
      if (config.loading.show) {
        window.$vm.$loading.show(config.loading.message)
      }
    }
  }
  const token = 'ceshi'
  var reg = /.json/
  if (token && !reg.test(config.url)) {
    config.headers.Authorization = token
  }
  config.headers['Content-Type'] = 'application/json'
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.data.code === 30001) {
    return false
    // delCookie('token')
    // store.commit('setToken', '')
    // router.push('/user/login')
  }
  if (response.config.loading) {
    window.$vm.$loading.hide()
  }
  if (response.config.showError !== false) {
    if (response.data.success === false) {
      window.$vm.$toast({
        position: 'top',
        message: window.$vm.$t(response.data.errcode)
      })
      if (response.data.errcode === 'login.overtime') {
        window.$vm.$router.push('/home')
      }
    }
  }
  return response
}, function (error) {
  window.$vm.$t('common.serverErr')
  // Do something with response error
  return Promise.reject(error)
})
export default instance
