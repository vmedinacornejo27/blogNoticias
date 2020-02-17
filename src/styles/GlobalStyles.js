import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media screen and (min-width: 1024px)
      {
        font-size: 16px;
      }
      @media screen and (min-width: 640px)
      {
        font-size: 14px;
      }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul { 
      list-style: none;
      padding-left: 0;
    }


  button { background: transparent; border: 0; outline: 0 }

  body {
    background: white;
    background-repeat: no-repeat;
    min-height: 100vh;
    
  }

  
`
