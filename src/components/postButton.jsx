import {BiPencil} from "react-icons/bi";
import { useNavigate } from "react-router";

export default function PostButton(){
    const navigate = useNavigate()

    return (
        <BiPencil style={styleObject} size="40px" onClick={()=>navigate("/post")}/>
    )

}

const styleObject = {

    color: "black",
    position:"fixed",
    bottom: "50px",
    right: "50px"
}