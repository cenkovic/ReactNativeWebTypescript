import React, { FC } from 'react'
import { ThemeProvider } from '@src/components/ThemeProvider/ThemeProvider'
import { Main } from '@src/Main'

const App: FC = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}
export default App
