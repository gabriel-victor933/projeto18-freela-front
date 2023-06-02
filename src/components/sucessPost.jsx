import { Forms } from "../style/forms"

export default function SucessPost({setPostState}){

    return (
        <div>
            <h3>post enviado</h3>
            <Forms>
                <button onClick={() => setPostState(postState => ({ ...postState, sucess: false, finalized: false }))}>Enviar outro!</button>
            </Forms>
        </div>
    )
}