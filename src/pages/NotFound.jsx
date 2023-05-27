import { Container } from "../style/container";
import { useNavigate } from "react-router";

export default function NotFound(){

    const navigate = useNavigate()

    return (
        <Container>
            <h1>Not Found!</h1>
            <button onClick={()=>navigate("/feed")}>Voltar para a home</button>
        </Container>
    )
}