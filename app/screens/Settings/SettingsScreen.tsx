import React, { FC } from 'react'
import { Button, View } from 'react-native'
import { useTheme } from '@app/components/ThemeProvider/ThemeProvider'
import { Text } from '@app/styles/Text/Text.styled'
import { useTranslation } from 'react-i18next'

export const SettingsScreen: FC = () => {
  const { changeTheme } = useTheme()
  const { t, i18n } = useTranslation()
  return (
    <View>
      <Text>{t('Change Theme')}</Text>
      <Button title={t('Light Theme')} onPress={() => changeTheme('light')} />
      <Button title={t('Dark Theme')} onPress={() => changeTheme('dark')} />
      <Text>{t('Change Language')}</Text>
      <Button title={t('English')} onPress={() => i18n.changeLanguage('en')} />
      <Button title={t('Serbian')} onPress={() => i18n.changeLanguage('rs')} />
    </View>
  )
}
