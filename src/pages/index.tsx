import React from 'react'
import { Container } from '../styles/pages/Home'

import Terminal from '../components/Terminal'
import Editor from '../components/Editor'

interface HomeProps {
  setTheme(theme: unknown): void
  theme: unknown
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
