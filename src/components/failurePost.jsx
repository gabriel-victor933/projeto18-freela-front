
export default function FailurePost({setPostState}){

    return (
        <div>
            <h3>Erro ao enviar post</h3>
            <button onClick={() => setPostState(postState => ({ ...postState, sucess: false, finalized: false }))}>Tentar novamente</button>
            <button>Voltar para o feed!</button>
        </div>
    )
}