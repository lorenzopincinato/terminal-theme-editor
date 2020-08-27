import React from 'react'
import {
  Container,
  TerminalWindow,
  TerminalTitleBar,
  TerminalBody,
  TerminalTitleBarButtonContainer,
  TerminalTitleBarButton
} from '../styles/pages/Home'

import minimizeIcon from '../assets/minimize_icon.svg'
import maximizeIcon from '../assets/maximize_icon.svg'
import closeIcon from '../assets/close_icon.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <TerminalWindow>
        <TerminalTitleBar>
          <TerminalTitleBarButtonContainer>
            <TerminalTitleBarButton isClose={false}>
              <img src={minimizeIcon} alt="" width="12px" height="12px" />
            </TerminalTitleBarButton>
            <TerminalTitleBarButton isClose={false}>
              <img src={maximizeIcon} alt="" width="12px" height="12px" />
            </TerminalTitleBarButton>
            <TerminalTitleBarButton isClose={true}>
              <img src={closeIcon} alt="" width="12px" height="12px" />
            </TerminalTitleBarButton>
          </TerminalTitleBarButtonContainer>
        </TerminalTitleBar>
        <TerminalBody />
      </TerminalWindow>
    </Container>
  )
}

export default Home
