import reset from 'styled-reset';
import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`

  ${reset}
    
  * {
      box-sizing: border-box;
      
    }
  body {
      height: 200vh;
      font-family: 'Poppins', sans-serif;
  }
`;

export const Diamond = styled.div`
  position: absolute;
  right: 50%;
  bottom: 100%;
  height: 11px;
  overflow: hidden;
  margin-bottom: -1px;
  transform: translateX(-47px);
  
  &:after {
    content: "";
    margin-top: 4px;
    border: 1px solid #cdcdcd;
    background: #fff;
    height: 14px;
    width: 14px;
    display: block;
    border-top-right-radius: 30%;
    transform: rotate(-55deg) skewX(-20deg);
  }
  
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

