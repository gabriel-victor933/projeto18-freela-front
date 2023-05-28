import { useEffect } from "react"
import Header from "../components/Header"
import Search from "../components/Search"
import PostButton from "../components/postButton"

export default function Feed(){

    useEffect(()=>{
        //get feed route

    },[])
    
    return(
        <>
        <Header />
        <Search />
        <div>Feed</div>
        <PostButton />
        </>
    )
}