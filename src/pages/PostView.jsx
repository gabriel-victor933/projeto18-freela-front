import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import Post from "../components/Post"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import Comments from "../components/Comments"
import Comment from "../components/Comment"
import FeedButton from "../components/FeedButton"

export default function PostView(){

    const {id} = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState(undefined)
    const [comments, setComments] = useState(undefined)


    const config = {headers: 
        {Authorization: `Bearer ${localStorage.getItem("token")}`}}

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/post/${id}`,config)
        .then((res)=>{
            setPost(res.data)
        })
        .catch((err)=>{
            if(err.response?.status) navigate("/notfound")
        })
    },[])

    useEffect(()=>{
        getComments()
    },[])

    function getComments(){
        axios.get(`${import.meta.env.VITE_API_URL}/post/${id}/comments`,config)
        .then((res)=>{
            setComments(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
            <FeedButton />
            {post && <Post post={post}/>}
            <Comment id={post?.id} config={config} loadComments={getComments}/>
            {comments?.map((comment) => <Comments key={comment.id} comment={comment}/>)}
        </>
    )
}