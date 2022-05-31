import { createGlobalStyle } from 'styled-components';
import STYLES from '../constants/Styles';
const GlobalStyles = createGlobalStyle`

 *, ::after, ::before {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }

 html {
   font-size: 62.5%;
   font-family: 'Outfit', sans-serif;
 }

 @media screen and (max-width: 1200px) {
    html {
      font-size: 58%;
    }
  }

  @media screen and (max-width: 1050px) {
    html {
      font-size: 52%;
    }
  }

 body {
   background-color: ${STYLES.colors.colorBlueDark};
   color: #fff;
 }

 input , button {
  font-family: inherit;
 }




`;

export default GlobalStyles
