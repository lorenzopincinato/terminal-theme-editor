import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import defaultTheme from '../styles/theme'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} setTheme={setTheme} theme={theme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
