import React, { useState } from 'react'

import { Box } from './styles'

interface EditorProps {
  setTheme(theme: unknown): void
  theme: unknown
}

const Editor: React.FC<EditorProps> = ({ setTheme, theme }) => {
  const [boxText, setBoxText] = useState(
    JSON.stringify(theme.terminal, undefined, 4)
  )

  const handleChange = e => {
    const text = e.target.value

    setBoxText(text)

    try {
      const newTheme = { ...theme }
      newTheme.terminal = { ...theme.terminal, ...JSON.parse(text) }

      setTheme(newTheme)
    } catch {
      console.log('Invalid json')
    }
  }

  return <Box onChange={handleChange} value={boxText} />
}

export default Editor
