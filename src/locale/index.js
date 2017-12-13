import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Locales from '@/locale/locale'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'

Vue.use(VueI18n)
// 自动设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
const lang = window.localStorage.lang || localLang || 'zh-CN'

Vue.config.lang = lang

// 多语言配置
const locales = Locales
const mergeZH = Object.assign(zhLocale, locales['zh-CN'])
const mergeEN = Object.assign(enLocale, locales['en-US'])

/* Vue.locale('zh-cn', mergeZH)
Vue.locale('en', mergeEN) */

const i18n = new VueI18n({
  locale: lang,    // 语言标识
  messages: {
    'CN': mergeZH,   // 中文语言包
    'EN': mergeEN    // 英文语言包
  }
})

if (module.hot) {
  module.hot.accept([mergeZH, mergeEN], () => {
    i18n.setLocaleMessage('CN', mergeZH)
    i18n.setLocaleMessage('EN', mergeEN)
    console.log('hot reload', this, arguments)
  })
}

export default i18n
