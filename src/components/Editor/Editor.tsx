import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import { CustomThemeProps } from '../../styles/theme'
import { Box } from './styles'

const CodeMirror = dynamic(import('./CodeMirror'), { ssr: false })

interface EditorProps {
  setTheme(theme: unknown): void
  theme: CustomThemeProps
}

const Editor: React.FC<EditorProps> = ({ setTheme, theme }) => {
  const [text, setText] = useState(JSON.stringify(theme.terminal, undefined, 4))

  return (
    <Box>
      <CodeMirror
        value={text}
        options={{
          theme: 'default',
          height: 'auto',
          viewportMargin: Infinity,
          lineWrapping: true,
          mode: {
            name: 'javascript',
            json: true,
            statementIndent: 2
          },
          lineNumbers: false,
          indentWithTabs: true,
          tabSize: 2
        }}
        onChange={(editor, data, value) => {
          setText(value)

          try {
            const newTheme = { ...theme }
            newTheme.terminal = { ...theme.terminal, ...JSON.parse(value) }
            setTheme(newTheme)
          } catch {
            console.log('Invalid json')
          }
        }}
      />
    </Box>
  )
}

export default Editor
