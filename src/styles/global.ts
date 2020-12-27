import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
    
    body {
        padding: 20px 40px;
    }

    table {
        border-spacing: 0;
        border-style: none;
        padding: 0;
    }

    td {
        border-spacing: 0;
        border-style: none;
        padding: 0;
    }
`;
