import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        font-size: 62.5%;
        color: ${theme.colors.whiteColor};
        background-color: ${theme.colors.blackColor};
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    input, button{
        font-family: inherit;
        font-size: inherit;
    }
    input{
        background-color: ${theme.colors.whiteColor};
        outline: 0;
        border: 0;
        &::placeholder {
            color: ${theme.colors.grayColor};
        }
    }
    button{
        cursor: pointer;
        border: 0rem;
    }
    img{
        vertical-align: top;
    }
`;

export default GlobalStyle;
