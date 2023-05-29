import Header from "../components/Header"
import { useParams, useLocation } from "react-router"
import UserHome from "../components/UserHome"
import UserPost from "../components/userPost"
import FeedButton from "../components/FeedButton"
import PostButton from "../components/postButton"
import UserProfile from "../components/userProfile"
import UserProfilePost from "../components/userProfilePost"


export default function User(){

    const {id} = useParams()
    const test = useLocation()

    return(
        <>
            <Header />
            <FeedButton />
            {test.pathname !== "/me" ? 
            <> <UserHome id={id}/><UserPost id={id}/></> : <><UserProfile /><UserProfilePost /> </>}
        
            <PostButton />
        </>
    )
}