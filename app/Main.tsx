import React, { FC, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import { useTheme } from '@app/themes/ThemeProvider'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { TabNavigation } from '@app/navigation/TabNavigation'
import { useSelector } from 'react-redux'
import { useAppSlice } from '@app/redux/slices/appSlice'
import { useTranslation } from 'react-i18next'

export const Main: FC = () => {
  const { theme } = useTheme()
  const { language } = useSelector(useAppSlice)
  const { i18n } = useTranslation()
  const { language: currentLanguage, changeLanguage } = i18n
  useEffect(() => {
    if (language !== currentLanguage) {
      changeLanguage(language).then()
    }
  }, [currentLanguage, changeLanguage, language])
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaViewStyled>
        <NavigationContainer
          theme={{
            dark: theme.name === 'dark',
            colors: {
              ...DefaultTheme.colors,
              background: theme.colors.primary.main,
              card: theme.colors.secondary.main,
              text: theme.colors.primary.contrastText,
              primary: theme.colors.primary.contrastText,
              border: theme.colors.primary.main,
              notification: theme.colors.info.main
            }
          }}>
          <TabNavigation />
        </NavigationContainer>
      </SafeAreaViewStyled>
    </ThemeProvider>
  )
}

const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.main};
`
