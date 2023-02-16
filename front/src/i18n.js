/*
 * Project: test
 * Author: Alejandro Herrera (alejo901003@hotmail.com)
 * File Create: Thursday, 16th February 2023 6:59:30 pm
 * Last Modified: Thursday, 16th February 2023 6:59:30 
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

let lang = 'es'
if (navigator.language === 'en' || navigator.userLanguage === 'en' || navigator.language === 'en-EN' || navigator.userLanguage === 'en-EN') {
  lang = 'en'
}
if (typeof (Storage) !== 'undefined') {
  if (window.localStorage.getItem('lang') != null) {
    lang = window.localStorage.getItem('lang')
  } else {
    window.localStorage.setItem('lang', lang)
  }
} else {
  // LocalStorage no soportado en este navegador
}

export default new VueI18n({
  locale: lang,
  fallbackLocale: lang,
  messages: loadLocaleMessages()
})
