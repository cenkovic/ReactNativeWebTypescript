import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import { useTheme } from '@src/components/ThemeProvider/ThemeProvider'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { TabNavigation } from '@src/navigation/TabNavigation'

export const Main: FC = () => {
  const { theme } = useTheme()
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
