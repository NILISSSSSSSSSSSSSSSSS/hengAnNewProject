const path = require('path')
const fs = require('fs')
const cn = require('./zh-cn.js')
// console.log(__dirname)
let en = {}

function trans (obj, target) {
  for (let i in obj) {
    if (typeof obj[i] === 'object') {
      target[i] = {}
      trans(obj[i], target[i])
    } else {
      target[i] = i
    }
  }
}

trans(cn, en)

fs.writeFile(path.resolve(__dirname, './en.json'), JSON.stringify(en), function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('success')
  }
})

fs.writeFile(path.resolve(__dirname, './cn.json'), JSON.stringify(cn), function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('success')
  }
})
