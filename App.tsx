import React, { FC } from 'react'
import { ThemeProvider } from '@app/themes/ThemeProvider'
import { Main } from '@app/Main'
import '@app/intl/i18next'

const App: FC = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}
export default App
