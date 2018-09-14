/**
 * 获取localStorage的值
 * @param {*} key 键名
 */
export function getItem (key) {
  var dataObj = window.localStorage.getItem(key)
  if (dataObj) {
    // var dataObj = JSON.parse(data)
    if (dataObj.type === 'string') {
      return dataObj.data
    } else if (dataObj.type === 'number') {
      return Number(dataObj.data)
    } else if (dataObj.type === 'object') {
      return JSON.parse(dataObj.data)
    } else {
      return null
    }
  } else {
    return null
  }
}
/**
 * 设置localStorage的值
 * @param {*} key 键名
 * @param {*} value 键值
 */
export function setItem (key, value) {
  let data = {
    type: '',
    data: null
  }
  if (typeof (value) === 'string') {
    data.type = 'string'
    data.data = value
  } else if (typeof (value) === 'number') {
    data.type = 'number'
    data.data = value
  } else if (typeof (value) === 'object') {
    data.type = 'object'
    data.data = JSON.stringify(value)
  } else {
    console.error('暂时只支持string,number,object对象')
  }
  window.localStorage.setItem(key, JSON.stringify(data))
}
/**
 * 删除localStorage值
 * @param {*} key 键名
 */
export function clearItem (key) {
  window.localStorage.setItem(key, '')
}
