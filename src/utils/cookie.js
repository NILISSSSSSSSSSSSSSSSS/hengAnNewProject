/**
 * 设置cookie键值对
 * @param {string} name 设置的cookie名
 * @param {string | number} value 设置的ciikie名对应的值
 * @returns {void}
 */
export function setCookie (name, value) {
  var Days = 30
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}
/**
 * 根据键名获取cookie值
 * @param {*} name 键名
 * @returns {string | null} 获取得到的cookie值
 */
export function getCookie (name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}
/**
 * 删除cookie值
 * @param {*} name 键名
 */
export function delCookie (name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}
