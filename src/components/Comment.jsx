import { styled } from "styled-components"
import { Container } from "../style/container"
import {BsSend, BsSnapchat} from "react-icons/bs"
import { useRef } from "react"
import axios from "axios"

export default function Comment({id,config, loadComments}){

    const commentRef = useRef()

    function handleClick(){
        if(!commentRef.current) return
        axios.post(`${import.meta.env.VITE_API_URL}/post/${id}/comments`,{comment: commentRef.current},config)
        .then((res)=>{
            console.log(res)
            loadComments()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <Container>
            <Block>
                <input placeholder="Escreva seu comentário!" onChange={(e) => commentRef.current = e.target.value}/>
                <BsSend className="icon" size="20px" onClick={handleClick}/>
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