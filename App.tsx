import React, { FC } from 'react'
import { ThemeProvider } from '@app/themes/ThemeProvider'
import { Main } from '@app/Main'
import '@app/intl/i18next'
import { Provider } from 'react-redux'
import { store } from '@app/redux/store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </Provider>
  )
}
export default App
