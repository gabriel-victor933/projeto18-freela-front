import { useState } from "react"
import { Container } from "../style/container"
import {Forms} from "../style/forms"
import {useForm} from "react-hook-form"

export default function Post(){

    const [postState,setPostState] = useState({loading: false,finalized:false,sucess: false})

    const {register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data) =>{
        
        console.log(data)
    }

    return (
       <Container>
            <Forms onSubmit={handleSubmit(onSubmit)}>
                <h3>Titulo</h3>
                <input type="text" 
                {...register('title',{required: "Escreva um titulo para a sua postagem!",
                maxLength: {value: 50, message: "O titulo deve ter menos de 50 caracters"}})}/>
                {errors?.title && <small>{errors.title.message}</small>}
                <label>Descrição</label>
                <input type="text" {...register('description')}/>
                <label>foto</label>
                <input type="url" {...register('photo',{required: "insira uma imagem para a sua postagem!"})}/>
                {errors?.photo && <small>{errors.photo.message}</small>}
                <button>Postar</button>
            </Forms>
       </Container>
    )
}

