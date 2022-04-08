import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --lightGray: #EEEEEE;

    --red: #EE2430;
  }

  body {
    background-color: var(--lightGray);

    * {
      box-sizing: border-box;
      
      font-family: inherit;
    }
  }
`
