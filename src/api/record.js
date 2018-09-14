import { axiosget } from './axios'

export function getMonthlyBill (obj) {
  return axiosget('/v1/record/monthlyBill', obj)
}
