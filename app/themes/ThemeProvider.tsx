import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState
} from 'react'
import themes, { light } from './themes'
import { DefaultTheme } from 'styled-components/native'
import { ThemeName } from '@app/styled'

const ThemeContext = createContext<{
  theme: DefaultTheme
  changeTheme: (theme: ThemeName) => void
}>({ theme: light, changeTheme: () => null })

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>('light')
  return (
    <ThemeContext.Provider
      value={{
        theme: themes.get(theme) ?? light,
        changeTheme: setTheme
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
