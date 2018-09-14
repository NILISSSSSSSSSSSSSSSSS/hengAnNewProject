import { axiosget } from '@/api/axios'
//  获取收款码接口
export function getReceiveCode () {
  return axiosget('/v1/wallet/getreceivecode').then((data) => {
    if (data.success) {
      return Promise.resolve(data)
    } else {
      return Promise.reject(data)
    }
  })
}
//  获取付款码接口
export function getPayCode () {
  return axiosget('/v1/wallet/getpaycode').then((data) => {
    if (data.success) {
      return Promise.resolve(data)
    } else {
      return Promise.reject(data)
    }
  })
}
