import React from 'react'

import { Line, Cursor, Green, Yellow, Purple, Cyan } from '../styles'

const GitBash: React.FC = () => {
  return (
    <>
      <Line>
        <Green>guest@browser</Green>&nbsp;
        <Purple>MING64</Purple>&nbsp;
        <Yellow>~/www/lorenzopincinato/windows-terminal-theme-generator</Yellow>
        &nbsp;
        <Cyan>(master)</Cyan>
      </Line>
      <Line>
        $&nbsp;<Cursor>|</Cursor>
      </Line>
    </>
  )
}

export default GitBash
