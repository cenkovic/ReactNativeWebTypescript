import React, { FC } from 'react'
import { Button } from 'react-native'
import { useTheme } from '@app/themes/ThemeProvider'
import { Text } from '@app/styles/Text/Text.styled'
import { useTranslation } from 'react-i18next'
import { Switch } from '@app/components/Switch/Switch'
import { Container } from './SettingsScreen.styles'

export const SettingsScreen: FC = () => {
  const { changeTheme, theme } = useTheme()
  const isLightTheme = theme.name === 'light'
  const { t, i18n } = useTranslation()
  return (
    <Container>
      <Switch
        label={isLightTheme ? t('Light Theme') : t('Dark Theme')}
        value={!isLightTheme}
        onValueChange={isDarkTheme =>
          changeTheme(isDarkTheme ? 'dark' : 'light')
        }
      />
      <Text>{t('Change Language')}</Text>
      <Button title={t('English')} onPress={() => i18n.changeLanguage('en')} />
      <Button title={t('Serbian')} onPress={() => i18n.changeLanguage('rs')} />
    </Container>
  )
}
