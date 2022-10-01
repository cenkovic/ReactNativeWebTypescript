import { DefaultTheme } from 'styled-components/native'
import { ThemeName } from '@app/styled'

export const light: DefaultTheme = {
  name: 'light',
  colors: {
    primary: {
      main: '#ffffff',
      contrastText: '#000000'
    },
    secondary: {
      main: '#38f',
      dark: '#00F',
      contrastText: '#00A'
    },
    error: {
      main: '#f55',
      contrastText: '#f00'
    },
    warning: {
      main: '#f90',
      contrastText: '#f60'
    },
    info: {
      main: '#38f',
      contrastText: '#aaf'
    },
    success: {
      main: '#3f8',
      contrastText: '#4a4'
    }
  }
}
export const dark: DefaultTheme = {
  name: 'dark',
  colors: {
    ...light.colors,
    primary: {
      main: '#000000',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#333333',
      dark: '#AAAAAA',
      contrastText: '#ffffff'
    }
  }
}

export default new Map<ThemeName, DefaultTheme>([
  ['light', light],
  ['dark', dark]
])
