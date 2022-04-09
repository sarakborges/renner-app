import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --lightGray: #EEEEEE;
    --black: #111111;
    --white: #FFFFFF;

    --red: #EE2430;
  }

  body {
    font-family: "Roboto", sans-serif;

    background-color: var(--lightGray);

    * {
      box-sizing: border-box;
      
      font-family: inherit;
    }
  }
`
