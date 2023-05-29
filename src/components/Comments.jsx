import { styled } from "styled-components"
import { Container } from "../style/container"
import img from "../assets/imgs/perfil.jpg"

export default function Comments({comment}){


    console.log(comment)
    return (
        <Container>
            <Block>
                <div>
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