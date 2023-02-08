import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
/*    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&display=swap'); */

  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800} ;
    color: ${({ theme }) => theme.COLORS.WHITE} ;

    -webkit-font-smoothing: antialiased
  }

  a{
    text-decoration: none;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`
