import { styled } from "styled-components"
import {useForm} from "react-hook-form"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { Container } from "../style/container"
import {Forms} from "../style/forms"

export default function SignUp(){

    const [serverError,setServerError] = useState({errorType:"",message:""})
    const {register, handleSubmit, formState: { errors },getValues} = useForm()
    const navigate = useNavigate()


    const onSubmit = (data) =>{
        
        axios.post(`${import.meta.env.VITE_API_URL}/signup`,data)
        .then((res)=>{
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
            setServerError(err.response?.data)
        })

    }
    const checkPassword = (confirm)=>{
        if(getValues("password") !==confirm){
            return "Senhas diferentes"
        }
   }


    
    return (
        <Container>
            <h1>Cadastro</h1>
            <Forms onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" >Nome:</label>
                <input type="text" name="name" {...register("name", { required: "insira o nome", maxLength: {value: 50, message: "máximo de 50 caracteres"} })}/>
                {errors?.name && <small>{errors.name.message}</small>}
                <label htmlFor="name" >E-mail:</label>
                <input type="email" name="email" {...register("email", { required: "insira o email", maxLength: {value: 50, message: "máximo de 50 caracteres"} })}/>
                {errors?.email && <small>{errors.email.message}</small>}
                {serverError?.errorType === "email" ? <small>{serverError.message}</small> : <></>}
                <label htmlFor="name" >Username: </label>
                <input type="text" name="username" {...register("username", { required: "insira o username", maxLength: {value: 50, message: "máximo de 50 caracteres"} })}/>
                {errors?.username && <small>{errors.username.message}</small>}
                {serverError?.errorType === "username" ? <small>{serverError.message}</small> : <></>}
                <label htmlFor="name" >Foto:</label>
                <input type="text" name="photo" {...register("photo", { pattern:{value: /^(https?|ftp):\/\/.*\.(jpeg|jpg|png|gif|bmp)$/, message: "insira um link válido (formato: http://...)"} })}/>
                {errors?.photo && <small>{errors.photo.message}</small>}
                <label htmlFor="name" >Biografia:</label>
                <input type="text" name="biography" {...register("biography", {maxLength: {value: 200, message: "máximo de 200 caracteres"}})}/>
                {errors?.biography && <small>{errors.biography.message}</small>}
                <label htmlFor="name" >Senha:</label>
                <input type="password" name="password" {...register("password", { required: "insira a senha"})}/>
                {errors?.password && <small>{errors.password.message}</small>}
                <label htmlFor="name" >Confirme sua senha:</label>
                <input type="password" name="ConfirmPassword" {...register("confirmPassword",{ required: "insira a senha", validate: checkPassword})}/>
                {errors?.confirmPassword && <small>{errors.confirmPassword.message}</small>}
                <button>Cadastrar</button>
            </Forms>
            <Link to="/"><small>Entrar</small></Link>
        </Container>
    )
}

