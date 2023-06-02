import {BiPencil} from "react-icons/bi";
import { useNavigate } from "react-router";

export default function PostButton(){
    const navigate = useNavigate()

    return (
        <BiPencil style={styleObject} size="50px" onClick={()=>navigate("/post")}/>
    )

}

const styleObject = {
    backgroundColor: "#FEF5ED",
    border: "1px solid #000",
    padding: "2px",
    borderRadius: "50%",
    color: "#000",
    position:"fixed",
    bottom: "50px",
    right: "20px"
}