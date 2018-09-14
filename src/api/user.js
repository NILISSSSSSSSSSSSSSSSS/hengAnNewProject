import { axiospost, axiosget }
  from './axios'
export function login (loginName, password) {
  return axiospost('/v1/login', {
    loginName: loginName,
    password: password,
    loginType: 2
  })
}

export function register (options) {
  return axiospost('/v1/register', options, null)
}

export function getRegisterPhoneVerfityCode (phone) {
  return axiosget('/v1/register/phoneverfitycode', {
    phone: phone
  })
}

export function getRegisterEmailVerfityCode (email) {
  return axiosget('/v1/register/emailverfitycode', {
    email: email
  })
}

export function getFindPwdPhoneVertifycode (phone) {
  return axiosget('/v1/user/findpwd/phonevertifycode', {
    phone: phone
  })
}

export function checkFindPwdPhoneVertifyCode (options) {
  return axiospost('/v1/user/findpwd/checkphonevertifycode', options)
}

export function checkFindPwdEmailVertifyCode (options) {
  return axiospost('/v1/user/findpwd/checkemailvertifycode', options)
}

export function getFindPwdEmailVertifycode (email) {
  return axiosget('/v1/user/findpwd/emailvertifycode', {
    email: email
  })
}

export function editpwd (options) {
  return axiospost('/v1/user/findpwd/editpwd', options)
}

export function googleAuthLogin (options) {
  return axiospost('v1/googleauthlogin', options)
}

// 验证并刷新登录token
export function validateToken (token) {
  return axiospost('v1/validateToken', token)
}
