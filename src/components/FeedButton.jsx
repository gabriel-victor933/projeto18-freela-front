import { Container } from "../style/container";
import {BiArrowBack} from "react-icons/bi";
import { useNavigate} from "react-router";

export default function FeedButton(){
    const navigate = useNavigate()

    return(
        <Container>
            <BiArrowBack size="25px" style={{padding: "0px"}} onClick={()=>navigate(-1)}/>
        </Container>
    )
}