import reset from 'styled-reset';
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

  ${reset}
    
  * {
      box-sizing: border-box;
      
    }
  body {
      font-family: 'Poppins', sans-serif;
  }
`

export default GlobalStyles