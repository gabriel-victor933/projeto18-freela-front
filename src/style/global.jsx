import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    
    *{
        box-sizing: border-box;

    }
    :root{
        --medium-size-bp: 900px;
        --small-size-bp: 480px;
    }

    body,#root {
        display: flex;
        justify-content: center;
        font-family: "Source Sans Pro", "sans-seriff";
        color: black;
        margin: 0px;
        
    }

    #root{

        width: 100%;
        padding-top: 30px;
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
    p,label { 
        font-size: 18px;
    }

    small {
        font-size: 14px;
    }

    strong {
        font-weight: 700;
    }

`