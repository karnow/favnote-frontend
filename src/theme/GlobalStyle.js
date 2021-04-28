import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before , *::after {
    box-sizing: border-box;
}

html {
    font-size: 62,5%; //1 rem === 10px
}
body {
    padding-left:150px;
    font-size: 1.6rem; //happy rems
    font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
