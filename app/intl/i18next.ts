import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from '@app/intl/resources'
import { language } from '@app/utils/locale'

export type Language = 'en' | 'rs'

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
