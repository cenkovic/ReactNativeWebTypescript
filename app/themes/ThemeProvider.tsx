import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext
} from 'react'
import themes, { light } from './themes'
import { DefaultTheme } from 'styled-components/native'
import { ThemeName } from '@app/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useAppSlice, changeTheme } from '@app/redux/slices/appSlice'

const ThemeContext = createContext<{
  theme: DefaultTheme
  changeTheme: (theme: ThemeName) => void
}>({ theme: light, changeTheme: () => null })

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch()
  const { theme } = useSelector(useAppSlice)
  const setTheme = useCallback((t: ThemeName) => {
    dispatch(changeTheme(t))
  }, [])
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
