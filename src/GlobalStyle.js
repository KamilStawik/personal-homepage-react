import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;