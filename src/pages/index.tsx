import React from 'react'
import { Container } from '../styles/pages/Home'

import Terminal from '../components/Terminal'
import Editor from '../components/Editor'

import { CustomThemeProps } from '../styles/theme'

interface HomeProps {
  setTheme(theme: unknown): void
  theme: CustomThemeProps
}

const Home: React.FC<HomeProps> = ({ setTheme, theme }) => {
  return (
    <Container>
      <Terminal />
      <Editor setTheme={setTheme} theme={theme} />
    </Container>
  )
}

export default Home
