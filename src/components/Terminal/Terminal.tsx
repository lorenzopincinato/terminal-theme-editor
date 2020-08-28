import React from 'react'
import {
  TerminalWindow as Window,
  TerminalTitleBar as TitleBar,
  TerminalBody,
  TerminalTitleBarButtonContainer as ButtonContainer,
  TerminalTitleBarButton as Button
} from './styles'

import minimizeIcon from '../../assets/minimize_icon.svg'
import maximizeIcon from '../../assets/maximize_icon.svg'
import closeIcon from '../../assets/close_icon.svg'

import { GitBash } from './Texts'

const Terminal: React.FC = () => {
  return (
    <Window>
      <TitleBar>
        <ButtonContainer>
          <Button isClose={false}>
            <img src={minimizeIcon} alt="" width="12px" height="12px" />
          </Button>
          <Button isClose={false}>
            <img src={maximizeIcon} alt="" width="11px" height="12px" />
          </Button>
          <Button isClose={true}>
            <img src={closeIcon} alt="" width="11.5px" height="12px" />
          </Button>
        </ButtonContainer>
      </TitleBar>
      <TerminalBody>
        <GitBash />
      </TerminalBody>
    </Window>
  )
}

export default Terminal
