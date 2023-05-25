import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    
    *{
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        font-family: "Source Sans Pro", "sans-seriff";
    }

    h1 { 
        font-size: 42px;
    }
    h2 { 
        font-size: 32px;
    }
    h3 { 
        font-size: 26px;
    }
    h4 { 
        font-size: 22px;
    }
    p { 
        font-size: 20px;
    }

    small {
        font-size: 13px;
    }

`