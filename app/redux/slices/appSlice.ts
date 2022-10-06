import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeName } from '@app/styled'
import { Language } from '@app/intl/i18next'
import { RootState } from '@app/redux/store'

export interface AppState {
  theme: ThemeName
  language: Language
}

const initialState: AppState = {
  theme: 'light',
  language: 'en'
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTheme: (state, { payload }: PayloadAction<ThemeName>) => {
      state.theme = payload
    },
    changeLanguage: (state, { payload }: PayloadAction<Language>) => {
      state.language = payload
    }
  }
})

export const { changeTheme, changeLanguage } = appSlice.actions

export const useAppSlice = (state: RootState) => state.app

export default appSlice.reducer
