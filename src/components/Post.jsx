import { Container } from "../style/container";
import {styled} from "styled-components"
import img from "../assets/imgs/perfil.jpg"
import {AiOutlineLike,AiFillLike, AiOutlineComment} from "react-icons/ai";
import { useState } from "react";

export default function Post({post}){

    const [likeState,setLikeState] = useState(post.isliked === "1")

    function handleLikeClick(){
        setLikeState((prev)=> !prev)
    }

    return(
        <Container>
            <Block>
                <div className="userInfos">
                    <img src={post.userphoto || img}/>
                    <h4>{post.username}</h4>
                </div>
                <img src={post.photo}/>
                <div>

                </div>
                <div className="postContent">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <div className="postInfos">
                        <small>{post.like} <strong>likes</strong></small>
                        <small>{post.comment} <strong>comments</strong></small>
                       {likeState ? <AiFillLike size="25px" onClick={handleLikeClick}/> : <AiOutlineLike size="25px" onClick={handleLikeClick}/>}
                        <AiOutlineComment size="25px"/>
                    </div>
                </div>

            </Block>
        </Container>
    )
}

const Block = styled.div`
    width: 100%;
    

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