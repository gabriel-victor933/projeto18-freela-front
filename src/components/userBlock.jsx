import img from "../assets/imgs/perfil.jpg"
import { styled } from "styled-components"
export default function UserBlock({username,photo,id}){
    console.log(username,photo,id)
    const src = (photo || img)

    console.log(src)
    return (    
        <Block>
            <img src={src} />
            <p>{username}</p>
        </Block>
    )
}

const Block = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    padding: 10px 0px;
    border-top: 1px solid #a3a3a3;
    
    
    

    img {
        height: 50px;
        width: 50px;
        margin-right: 10px;
        border-radius: 50%;

        &:hover {
        cursor: pointer;
    }
    }

    p{
        &:hover {
        cursor: pointer;
    }
    }
    
`