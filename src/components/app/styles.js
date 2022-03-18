import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    min-height: 100%;
    }

    
    body,
    html {
        margin: 0;
    }

    body {
        min-height: 100vh;
        font-family: ${props => props.theme.fontFamily};
        font-size: ${props => props.theme.fontSizeDefault};
        line-height: 27px;
        font-weight: 400;
        color: ${props => props.theme.colorBlackForText};
    }

    #root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: min-content 1fr min-content;
    }
`



