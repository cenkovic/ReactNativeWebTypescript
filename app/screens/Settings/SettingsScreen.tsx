import React, { FC } from 'react'
import { useTheme } from '@app/themes/ThemeProvider'
import { useTranslation } from 'react-i18next'
import { Switch } from '@app/components/Switch/Switch'
import { Container, OptionRow } from './SettingsScreen.styles'
import { LanguagePicker } from '@app/components/LanguagePicker/LanguagePicker'

export const SettingsScreen: FC = () => {
  const { changeTheme, theme } = useTheme()
  const isLightTheme = theme.name === 'light'
  const { t } = useTranslation()
  return (
    <Container>
      <OptionRow>
        <Switch
          label={isLightTheme ? t('Light Theme') : t('Dark Theme')}
          value={!isLightTheme}
          onValueChange={isDarkTheme =>
            changeTheme(isDarkTheme ? 'dark' : 'light')
          }
        />
      </OptionRow>
      <OptionRow>
        <LanguagePicker />
      </OptionRow>
    </Container>
  )
}
