import cn from './zh-cn.js'
import en from './en.json'
import VueI18n from 'vue-i18n'
import Vue from 'vue'
import { getItem } from '@/utils/storage'
Vue.use(VueI18n)

const messages = {
  'zh-cn': cn,
  'en-us': en
}
let storeageLocale = getItem('wallet.locale')
const i18n = new VueI18n({
  locale: storeageLocale || 'zh-cn',
  messages
})

i18n.languages = [{
  name: '中文',
  key: 'zh-cn'
}, {
  name: 'English',
  key: 'en-us'
}]

export default i18n
