import Header from "../components/Header"
import { useParams } from "react-router"
import UserHome from "../components/UserHome"
import UserPost from "../components/userPost"

export default function User(){

    const {id} = useParams()


    return(
        <>
            <Header />
            <UserHome id={id}/>
            <UserPost id={id}/>
        </>
    )
}