import { Container } from "../style/container";
import {styled} from "styled-components"
import img from "../assets/imgs/perfil.jpg"
import {AiOutlineLike,AiFillLike, AiOutlineComment} from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Post({post}){

    const [likeState,setLikeState] = useState(post.isliked === "1")
    const [likeNumber,setLikeNumber] = useState(parseInt(post.like))

    const config = {headers: 
        {Authorization: `Bearer ${localStorage.getItem("token")}`}}

    function handleLikeClick(){

        if(!likeState){
            setLikeNumber(likeNumber + 1)
            axios.post(`${import.meta.env.VITE_API_URL}/like/${post.id}`,{},config)
            .catch((err)=>{
                console.log(err)
                
                setLikeState((prev)=> !prev)
            })
        } else {
            setLikeNumber(likeNumber - 1)
            axios.delete(`${import.meta.env.VITE_API_URL}/like/${post.id}`,config)
            .catch((err)=>{
                console.log(err)
                setLikeState((prev)=> !prev)
                
            })
        }

        setLikeState((prev)=> !prev)
    }
    return(
        <Container>
            <Block>
                <Link to={`/user/${post.userid}`}>
                <div className="userInfos">
                    <img src={post.userphoto || img}/>
                    <h4>{post.username}</h4>
                </div>
                </Link>
                <img src={post.photo}/>
                <div>

                </div>
                <div className="postContent">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <div className="postInfos">
                        <small>{likeNumber} <strong>likes</strong></small>
                        <small>{post.comment} <strong>comments</strong></small>
                       {likeState ? <AiFillLike size="25px" onClick={handleLikeClick}/> : <AiOutlineLike size="25px" onClick={handleLikeClick}/>}
                        <Link to={`/post/${post.id}`}><AiOutlineComment size="25px"/></Link>
                    </div>
                </div>

            </Block>
        </Container>
    )
}

const Block = styled.div`
    width: 100%;
    a{
            text-decoration: none;
            color: black;
        }

    .userInfos{
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 5px 0px;
        
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            padding: 0px
        }
    }

    .postContent {
        h3 {
            margin-bottom: 5px;
        }

        p {
            text-align: justify;
        }
    }

    .postInfos {
        display: flex;
        margin-top: 7px;
        gap: 10px;
        align-items: center;
        
    }

    img{
        width: 100%;
        max-height: 700px;
        padding: 10px 0px;
    }
    
`