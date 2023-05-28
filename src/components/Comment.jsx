import { styled } from "styled-components"
import { Container } from "../style/container"
import {BsSend, BsSnapchat} from "react-icons/bs"

export default function Comment(){

    return (
        <Container>
            <Block>
                <input placeholder="Escreva seu comentário!"/>
                <BsSend className="icon" size="20px"/>
            </Block>
        </Container>
    )
}

const Block = styled.div`
    
    width: 100%;
    height: 30px;
    position: relative;

    input {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        outline: none;
        border: none;

        &:hover {
            border: 1px solid #000000;
        }
    }

    .icon {
        position: absolute;
        z-index: 2;
        top: 50%;
        right: 0;
        transform: translate(-20%,-50%);

    }
`