export type ThemeName = 'light' | 'dark'
export interface PaletteColor {
  light?: string
  main: string
  dark?: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeName
    colors: {
      primary: PaletteColor
      secondary: PaletteColor
      error: PaletteColor
      warning: PaletteColor
      info: PaletteColor
      success: PaletteColor
    }
  }
}
