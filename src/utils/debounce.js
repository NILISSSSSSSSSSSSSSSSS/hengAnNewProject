/**
 * 函数防抖，用于防止数据重复提交
 * @param {function} fn - 主体函数
 * @param {number} delay - 防抖时间，默认1000MS
 * @param {boolean} isDebounce - 防抖或者节流，默认防抖
 * @returns {void} - 无返回
 */
export const debounce = function (fn, delay = 3000, isDebounce = true) {
  let lastCall = 0
  if (isDebounce) {
    console.log(window.timer)
    if (window.timer) {
      clearTimeout(window.timer)
      window.timer = null
      window.timer = setTimeout(() => {
        clearTimeout(window.timer)
        window.timer = null
      }, delay)
    } else {
      fn()
      window.timer = setTimeout(() => {
        clearTimeout(window.timer)
        window.timer = null
      }, delay)
    }
  } else {
    const now = new Date().getTime()
    if (now - lastCall < delay) return
    lastCall = now
    fn()
  }
}
