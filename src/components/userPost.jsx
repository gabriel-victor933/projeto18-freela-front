import { styled } from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import Post from "./Post"
import { Container } from "../style/container"

export default function UserPost({id}){

    const [posts,setPosts] = useState([])

    const config = {headers: 
        {Authorization: `Bearer ${localStorage.getItem("token")}`}}
    
    useEffect(()=>{

        axios.get(`${import.meta.env.VITE_API_URL}/user/posts/${id}`,config)
        .then((res)=>{
            setPosts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <>
        {posts.length === 0 ? <Container>Nenhum Post</Container>:<></>}
        {posts.map((post)=> <Post key={post.id} post={post}/> )}
        </>
    )
}
