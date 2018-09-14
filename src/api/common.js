import { axiosget, axiospost, axiosput, axiosdelete }
  from './axios'

export function getCommon (obj) {
  axiosget('/common/index', obj)
}
