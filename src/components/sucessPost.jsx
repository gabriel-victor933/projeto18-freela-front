
export default function SucessPost({setPostState}){

    return (
        <div>
            <h3>post enviado</h3>
            <button onClick={() => setPostState(postState => ({ ...postState, sucess: false, finalized: false }))}>Enviar outro!</button>
            <button>Voltar para o feed!</button>
        </div>
    )
}