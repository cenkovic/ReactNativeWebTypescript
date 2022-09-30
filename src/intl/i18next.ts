import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from '@src/intl/resources'
import { language } from '@src/utils/locale'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: language(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
