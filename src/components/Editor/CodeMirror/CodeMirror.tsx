import React from 'react'

import { UnControlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyCodeMirror = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<CodeMirror> &
    Readonly<import('react-codemirror2').IUnControlledCodeMirror>
) => {
  return <CodeMirror {...props} />
}

export default MyCodeMirror
