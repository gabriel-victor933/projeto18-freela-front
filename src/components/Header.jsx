import { useEffect } from "react"
import { styled } from "styled-components"

export default function Header(){

    useEffect(()=>{
        //pegar infos do usuario.
    },[])

    return (
        <Head>
            <h2>Fomebook</h2>
            <div>
                <h4>name</h4>
                <img src={url}/>
            </div>
        </Head>
    )
}

const Head = styled.div`
    width: 100%;
    padding: 2vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: lightgray;
    position: fixed;
    top: 0;
    

    div {
        display: flex;
        justify-content: center;
        align-items: center;


        img {
            height: 65px;
            width: 65px;
            background-size: contain;
            border-radius: 50%;
            padding: 1px;
            outline: solid 1px #4e4e4e;
            margin-left: 15px;
        }

        @media (max-width: 480px) {
        h4{display: none}
        }
    }
    
`


const url = "https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg"