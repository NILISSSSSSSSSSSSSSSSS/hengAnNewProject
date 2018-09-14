import { axiosget, axiospost }
  from './axios'
export function getTransferInfo (data) {
  return axiosget('v1/transfer/info', data).then(res => {
    if (res.success) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  })
}

export function submitTransfer (data) {
  return axiospost('v1/transfer', data).then(res => {
    if (res.success) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  })
}
