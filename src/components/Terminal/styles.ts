import styled from 'styled-components'

export const TerminalWindow = styled.div`
  display: flex;
  flex-direction: column;

  height: 36rem;
  width: 64rem;

  border-style: solid;
  border-width: 1px;

  border-color: #333333ff;

  box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.49);
`

export const TerminalTitleBar = styled.div`
  display: flex;

  flex-direction: column;

  height: 2rem;
  width: 100%;

  background-color: #333333ff;
`

export const TerminalTitleBarButtonContainer = styled.div`
  display: flex;

  align-self: flex-end;

  width: auto;
  height: 100%;
`

export const TerminalTitleBarButton = styled('div')<{ isClose: boolean }>`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 2.65rem;
  height: 100%;

  transition: 0.2s ease-out;

  background: ${props =>
    props.isClose ? 'rgba(255, 0, 0, 0)' : 'rgba(255, 255, 255, 0)'};

  &:hover {
    background: ${props =>
      props.isClose ? 'rgba(215, 16, 32, 1)' : 'rgba(255, 255, 255, 0.3)'};
    transition: 0.1s ease-in;
  }
`

export const TerminalBody = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  padding: 0.75rem;
  padding-top: 0.55rem;

  background-color: ${props => props.theme.terminal.background};
  color: ${props => props.theme.terminal.foreground};

  font-family: 'Cascadia Code';
  font-size: 14px;
`
