import { styled } from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import Post from "./Post"

export default function UserProfilePost(){

    const [posts,setPosts] = useState([])

    const config = {headers: 
        {Authorization: `Bearer ${localStorage.getItem("token")}`}}
    
    useEffect(()=>{

        axios.get(`${import.meta.env.VITE_API_URL}/me/posts`,config)
        .then((res)=>{
            setPosts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <>
        {posts.map((post)=> <Post key={post.id} post={post}/> )}
        </>
    )
}
