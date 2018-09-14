import { axiosget, axiospost } from './axios'

// 获取所有钱包信息
export function getWalletsInfo (obj) {
  return axiosget('/v1/wallet/index', obj)
}
// 获取单个钱包详情
export function getWalletDetail (obj) {
  return axiosget('/v1/wallet/detail', obj)
}
// 提币页面获取钱包信息
export function getWithdrawInfo (obj) {
  return axiosget('/v1/wallet/getcoin', obj)
}
// 提币请求
export function withdrawPost (obj) {
  return axiospost('/v1/wallet/getcoin', obj)
}
