import { axiosget, axiospost, axiosput } from './axios'

const v1Setting = '/v1/setting'

// 获取设置信息
export function getSetting () {
  return axiosget(v1Setting)
}

// 切换消息通知开关
export function switchInform (inform) {
  return axiospost(`${v1Setting}/switchMessage`, { inform })
}

// 修改登录密码
export function settingPassword (loginName, oldPassword, newPassword, newPassword2) {
  return axiosput(`${v1Setting}/password`, {
    loginName,
    oldPassword,
    newPassword,
    newPassword2
  })
}

// 忘记密码-修改登录密码
export function forgetPw (loginName, code, newPassword) {
  return axiosput(`${v1Setting}/forgetPw`, {
    loginName,
    code,
    newPassword
  })
}

// 发送验证码
export function getCode (loginName) {
  return axiosget(`${v1Setting}?loginName=${loginName}`)
}

// 验证验证码
export function verifyCode (loginName, code) {
  return axiospost(`${v1Setting}/verifyCode`, {loginName, code})
}

// 绑定手机/邮箱
export function bindLoginName (loginName, code) {
  return axiospost(`${v1Setting}/bind`, { loginName, code }, { loading: true })
}

// 获取二次验证密钥
export function getGoogle () {
  return axiosget(`${v1Setting}/google`)
}

// 开启两部验证
export function openGoogle (code, payPw) {
  return axiospost(`${v1Setting}/google`, { code, payPw })
}

// 设置资金密码
export function setPayPw (payPw) {
  return axiospost(`${v1Setting}/setPayPw`, { payPw })
}

// 是否绑定的信息
export function isBind () {
  return axiosget(`${v1Setting}/isBind`)
}
