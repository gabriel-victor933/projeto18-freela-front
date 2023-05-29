import { useState } from "react"
import { Container } from "../style/container"
import {Forms} from "../style/forms"
import {useForm} from "react-hook-form"
import axios from "axios"
import SucessPost from "../components/sucessPost"
import FailurePost from "../components/failurePost"
import Header from "../components/Header"
import FeedButton from "../components/FeedButton"

export default function PostForm(){

    const [postState,setPostState] = useState({loading: false,finalized:false,sucess: false})

    const {register, handleSubmit, formState: { errors }, reset} = useForm()

    const onSubmit = (data) =>{
        setPostState({loading: true,finalized:false,sucess: true})
        const config = {headers: 
            {Authorization: `Bearer ${localStorage.getItem("token")}`}}

        axios.post(`${import.meta.env.VITE_API_URL}/post`,data,config)
        .then((res)=>{
            setPostState({loading: false,finalized:true,sucess: true})
            reset()
        })
        .catch((err)=>{
            setPostState({loading: false,finalized:true,sucess: false})
        })
    }

    return (
        <>
        <Header />
        <FeedButton />
       <Container>
            {!postState.finalized && <Forms onSubmit={handleSubmit(onSubmit)}>
                <h3>Titulo</h3>
                <input type="text" 
                {...register('title',{required: "Escreva um titulo para a sua postagem!",
                maxLength: {value: 50, message: "O titulo deve ter menos de 50 caracters"}})}/>
                {errors?.title && <small>{errors.title.message}</small>}
                <label>Descrição</label>
                <input type="text" {...register('description')}/>
                <label>foto</label>
                <input type="url" {...register('photo',
                {required: "insira uma imagem para a sua postagem!",
                pattern:{value: /^(https?|ftp):\/\/.*\.(jpeg|jpg|png|gif|bmp|xxx)$/, message: "insira um link válido (formato: http://...)"}})}/>
                {errors?.photo && <small>{errors.photo.message}</small>}
                <button>Postar</button>
            </Forms>}

            {postState.sucess &&  <SucessPost setPostState={setPostState}/>}

            {!(postState.sucess == false && postState.finalized==true) ? <></> :<FailurePost setPostState={setPostState}/>  }
       </Container>
       </>
    )
}

