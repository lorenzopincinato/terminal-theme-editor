import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  span {
    height: min-content;
  }

  @font-face {
    font-family: 'Cascadia Code';
    src: url('${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/CascadiaMono.woff2');
  }

  .CodeMirror-vscrollbar {
    overflow: hidden !important;
  }

  .CodeMirror {
    height: 100% !important;
    width: 100% !important;
  };

`
