/**
 * 验证输入密码的正确性
 * @param {string} pw 需要验证的字符串
 * @returns {boolean}
 */
export function pwVerify (pw) {
  if (/^\w{6,18}$/.test(pw)) {
    return true
  }
  return false
}

export function phoneVerify (phone) {
  const reg = /^(\+|00){0,2}(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/

  if (reg.test(phone)) {
    return true
  }
  return false
}

export function emailVerify (email) {
  const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/

  if (reg.test(email)) {
    return true
  }
  return false
}

// 资金密码格式校验
export function payPwdVerify (pwd) {
  const reg = /^\d{6}$/
  return reg.test(pwd)
}
