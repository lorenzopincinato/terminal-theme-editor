import React, { useState } from 'react'

import dynamic from 'next/dynamic'

import { CustomThemeProps } from '../../styles/theme'

import { Box } from './styles'

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false })

interface EditorProps {
  setTheme(theme: unknown): void
  theme: CustomThemeProps
}

const Editor: React.FC<EditorProps> = ({ setTheme, theme }) => {
  const [boxText, setBoxText] = useState(
    JSON.stringify(theme.terminal, undefined, 4)
  )

  const handleChange = text => {
    setBoxText(text)

    try {
      const newTheme = { ...theme }
      newTheme.terminal = { ...theme.terminal, ...JSON.parse(text) }

      setTheme(newTheme)
    } catch {
      console.log('Invalid json')
    }
  }

  return (
    <Box>
      <MonacoEditor
        editorWillMount={monaco => {
          monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: [
              {
                uri: 'http://myserver/foo-schema.json',
                fileMatch: ['*'],
                schema: {
                  type: 'object',
                  required: ['name'],
                  properties: {
                    name: {
                      type: ['string']
                    },
                    black: {
                      type: ['string']
                    },
                    red: {
                      type: ['string']
                    },
                    green: {
                      type: ['string']
                    },
                    yellow: {
                      type: ['string']
                    },
                    blue: {
                      type: ['string']
                    },
                    purple: {
                      type: ['string']
                    },
                    cyan: {
                      type: ['string']
                    },
                    white: {
                      type: ['string']
                    },
                    brightBlack: {
                      type: ['string']
                    },
                    brightGreen: {
                      type: ['string']
                    },
                    brightYellow: {
                      type: ['string']
                    },
                    brightBlue: {
                      type: ['string']
                    },
                    brightPurple: {
                      type: ['string']
                    },
                    brightCyan: {
                      type: ['string']
                    },
                    brightWhite: {
                      type: ['string']
                    },
                    background: {
                      type: ['string']
                    },
                    foreground: {
                      type: ['string']
                    }
                  }
                }
              }
            ]
          })
        }}
        editorDidMount={() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.MonacoEnvironment.getWorkerUrl = (
            _moduleId: string,
            label: string
          ) => {
            if (label === 'json') {
              return '_next/static/json.worker.js'
            }
            if (label === 'css') {
              return '_next/static/css.worker.js'
            }
            if (label === 'html') {
              return '_next/static/html.worker.js'
            }
            if (label === 'typescript' || label === 'javascript') {
              return '_next/static/ts.worker.js'
            }
            return '_next/static/editor.worker.js'
          }
        }}
        options={{
          lineNumbers: 'off',
          glyphMargin: false,
          folding: false,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 0,
          minimap: {
            enabled: false
          },
          scrollbar: {
            vertical: 'hidden',
            handleMouseWheel: false
          }
        }}
        language="json"
        theme="vs-dark"
        value={boxText}
        onChange={handleChange}
      />
    </Box>
  )
}

export default Editor
