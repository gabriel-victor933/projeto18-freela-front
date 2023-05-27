import Header from "../components/Header"
import { useParams } from "react-router"
import UserHome from "../components/UserHome"
import UserPost from "../components/userPost"
import FeedButton from "../components/FeedButton"
import PostButton from "../components/postButton"


export default function User(){

    const {id} = useParams()


    return(
        <>
            <Header />
            <FeedButton />
            <UserHome id={id}/>
            <UserPost id={id}/>
            <PostButton />
        </>
    )
}