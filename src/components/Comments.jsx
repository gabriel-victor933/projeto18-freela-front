import { styled } from "styled-components"
import { Container } from "../style/container"
import img from "../assets/imgs/perfil.jpg"
import { useNavigate } from "react-router-dom"

export default function Comments({comment}){

    const navigate = useNavigate()

    return (
        <Container>
            <Block>
                <div onClick={()=>navigate(`/user/${comment.userid}`)}>
                <img src={comment.photo || img} />
                <h4>{comment.username}</h4>
                </div>
                <p>{comment.comment}</p>
            </Block>
        </Container>
    )
}

const Block = styled.div`
    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
    }
    }

    p {
        margin-top: 7px;;
    }

    
`