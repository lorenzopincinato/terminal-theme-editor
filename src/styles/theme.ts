export interface CustomThemeProps {
  terminal: {
    name: string
    black: string
    red: string
    green: string
    yellow: string
    blue: string
    purple: string
    cyan: string
    white: string
    brightBlack: string
    brightRed: string
    brightGreen: string
    brightYellow: string
    brightBlue: string
    brightPurple: string
    brightCyan: string
    brightWhite: string
    background: string
    foreground: string
  }
}

const theme: CustomThemeProps = {
  terminal: {
    name: 'Default Dark',
    black: '#000000',
    red: '#bb0000',
    green: '#00bb00',
    yellow: '#bbbb00',
    blue: '#0000bb',
    purple: '#bb00bb',
    cyan: '#00bbbb',
    white: '#bbbbbb',
    brightBlack: '#555555',
    brightRed: '#ff5555',
    brightGreen: '#55ff55',
    brightYellow: '#ffff55',
    brightBlue: '#5555ff',
    brightPurple: '#ff55ff',
    brightCyan: '#55ffff',
    brightWhite: '#ffffff',
    background: '#000000',
    foreground: '#bbbbbb'
  }
}

export default theme
