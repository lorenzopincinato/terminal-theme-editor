import styled, { keyframes } from 'styled-components'

export const Line = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 0.2rem;

  width: 100%;
`

const cursorAnimation = props => keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: ${props.theme.terminal.foreground};
  }
}`

export const Cursor = styled.span`
  animation: 1s ${props => cursorAnimation(props)} step-end infinite;
`

export const Green = styled.span`
  color: ${props => props.theme.terminal.green};
`

export const Yellow = styled.span`
  color: ${props => props.theme.terminal.yellow};
`

export const Purple = styled.span`
  color: ${props => props.theme.terminal.purple};
`

export const Cyan = styled.span`
  color: ${props => props.theme.terminal.cyan};
`
