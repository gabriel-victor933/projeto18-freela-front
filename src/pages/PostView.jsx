import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import Post from "../components/Post"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import Comments from "../components/Comments"
import Comment from "../components/Comment"

export default function PostView(){

    const {id} = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState(undefined)

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

    return (
        <>
            <Header />
            {post && <Post post={post}/>}
            <Comment />
            <Comments />
        </>
    )
}