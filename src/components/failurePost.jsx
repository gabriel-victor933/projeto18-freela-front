import { Forms } from "../style/forms"
import { useNavigate } from "react-router-dom"

export default function FailurePost({setPostState}){

    const navigate = useNavigate()

    return (
        <div>
            <h3>Erro ao enviar post</h3>
            <Forms>
                <button onClick={() => setPostState(postState => ({ ...postState, sucess: false, finalized: false }))}>Tentar novamente</button>
                <button onClick={()=>navigate("/feed")}>Voltar para o feed!</button>
            </Forms>
            
        </div>
    )
}