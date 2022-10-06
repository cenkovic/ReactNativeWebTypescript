import { configureStore } from '@reduxjs/toolkit'
import app from './slices/appSlice'
import { api } from '@app/services/api/api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    app,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
