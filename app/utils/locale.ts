import { Platform, NativeModules } from 'react-native'

export const locale = () => {
  switch (Platform.OS) {
    case 'ios':
      return (
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      )
    case 'android':
      return NativeModules.I18nManager.localeIdentifier
    case 'web':
    default:
      return 'en_GB'
  }
}

export const language = () => locale().split('_')[0]
