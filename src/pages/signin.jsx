import { styled } from "styled-components"
import {useForm} from "react-hook-form"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Container } from "../style/container"
import {Forms} from "../style/forms"

export default function SignIn(){

    const {register, handleSubmit, formState: { errors }} = useForm()
    const [serverError,setServerError] = useState({errorType:"",message:""})

    const onSubmit = (data) =>{
        
        axios.post(`${import.meta.env.VITE_API_URL}/signin`,data)
        .then((res)=>{
           
            localStorage.setItem("token",res.data.token)
        })
        .catch((err)=>{
            
            setServerError(err.response?.data)

            if(!err.response) alert(err.message)
        })
    }

    return (
        <Container>
            <h1>Entrar</h1>
            <Forms onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" >E-mail ou userName:</label>
                <input type="text" name="email" {...register("locator", { required: "Insira o email/username", maxLength: {value: 50, message: "máximo de 50 caracteres"} } )}/>
                {errors?.locator && <small>{errors.locator.message}</small>} 
                {serverError?.errorType === "email" ? <small>{serverError.message}</small> : <></>}
                <label htmlFor="name" >Senha:</label>
                <input type="password" name="password" {...register("password", { required: "insira a senha"})}/>
                {errors?.password && <small>{errors.password.message}</small>}
                {serverError?.errorType === "password" ? <small>{serverError.message}</small> : <></>}
                <button>Entrar</button>
            </Forms>

            <Link to="/signup"><small>Cadastrar</small></Link>
        </Container>
    )
}
