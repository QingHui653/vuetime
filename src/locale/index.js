import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Locales from '@/locale/locale'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import twLocale from 'element-ui/lib/locale/lang/zh-TW'
import enLocale from 'element-ui/lib/locale/lang/en'

// 自动设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
const lang = window.localStorage.lang || localLang || 'zh-CN'

Vue.config.lang = lang

// 此处 使用 必须 在 new VueI18n 前
Vue.use(VueI18n)

// 多语言配置
const locales = Locales
const mergeZH = Object.assign(zhLocale, locales['zh-CN'])
const mergeTW = Object.assign(twLocale, locales['zh-TW'])
const mergeEN = Object.assign(enLocale, locales['en-US'])

// 5.0版本 的使用 iview-admin 的 使用
/* Vue.locale('zh-cn', mergeZH)
Vue.locale('en', mergeEN) */

// 新版本的 使用 vue-i18n 官方
const i18n = new VueI18n({
  locale: lang,    // 语言标识
  // this.$i18n.locale = lang // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': mergeZH,   // 中文语言包
    'zh-TW': mergeTW,
    'en-US': mergeEN    // 英文语言包
  }
})

// 热加载 暂时不知道如果使用
/* if (module.hot) {
  module.hot.accept([mergeZH, mergeTW, mergeEN], () => {
    i18n.setLocaleMessage('zh-CN', mergeZH)
    i18n.setLocaleMessage('zh-TW', mergeTW)
    i18n.setLocaleMessage('en-US', mergeEN)
    console.log('hot reload', this, arguments)
  })
} */

export default i18n
