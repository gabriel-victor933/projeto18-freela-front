import { useEffect, useState } from "react"
import Search from "../components/Search"
import PostButton from "../components/postButton"
import axios from "axios"
import Post from "../components/Post"
import { Container } from "../style/container"

export default function Feed(){

    const [posts,setPosts] = useState([])

    const config = {headers: 
        {Authorization: `Bearer ${localStorage.getItem("token")}`}}

    useEffect(()=>{
    
        axios.get(`${import.meta.env.VITE_API_URL}/me/feed`,config)
        .then((res)=>{
            setPosts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])
    
    return(
        <>
        <Search />
        {posts.map((post) => <Post key={post.id} post={post} />)}
        {posts.length === 0 ? <Container><h4>Sem publicações no momento.</h4></Container> : <></>}
        <PostButton />
        </>
    )
}