import img from "../assets/imgs/perfil.jpg"
import { styled } from "styled-components"
import { useNavigate } from "react-router"
export default function UserBlock({username,photo,id}){
    const src = (photo || img)

    const navigate = useNavigate()
    return (      
        <Block>
            <img src={src} onClick={()=>navigate(`/user/${id}`)}/>
            <p onClick={()=>navigate(`/user/${id}`)}>{username}</p>
        </Block>
    )
}

const Block = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    padding: 10px 0px;
    border-top: 1px solid #ADC2A9;
    
    
    

    img {
        height: 50px;
        width: 50px;
        margin-right: 10px;
        border-radius: 50%;
        border-top: 1px solid #99A799;
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