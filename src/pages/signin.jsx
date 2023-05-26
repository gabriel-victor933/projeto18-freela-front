import { styled } from "styled-components"
import {useForm} from "react-hook-form"
import { useState } from "react"
import axios from "axios"

export default function SignIn(){

    const {register, handleSubmit, formState: { errors }} = useForm()
    const [serverError,setServerError] = useState({errorType:"",message:""})

    const onSubmit = (data) =>{
        
        axios.post(`${import.meta.env.VITE_API_URL}/signin`,data)
        .then((res)=>{
           
            localStorage.setItem("token",res.data.token)
        })
        .catch((err)=>{
            console.log(err)
            setServerError(err.response.data)
        })
    }

    return (
        <Container>
            <h1>Entrar</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" >E-mail ou userName:</label>
                <input type="text" name="email" {...register("locator", { required: "Insira o email/username", maxLength: {value: 50, message: "máximo de 50 caracteres"} } )}/>
                {errors?.locator && <small>{errors.locator.message}</small>} 
                {serverError.errorType === "email" ? <small>{serverError.message}</small> : <></>}
                <label htmlFor="name" >Senha:</label>
                <input type="password" name="password" {...register("password", { required: "insira a senha"})}/>
                {errors?.password && <small>{errors.password.message}</small>}
                {serverError.errorType === "password" ? <small>{serverError.message}</small> : <></>}
                <button>Entrar</button>
            </form>

        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    min-height: 400px;
    background-color: lightgray;
    border: 1px solid darkgray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 15px;

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }


    @media (max-width: 900px) {
        width: 70%;
        background-color: lightgray;
    }

    @media (max-width: 480px) {
        width: 100%;
        background-color: lightgray;
    }
`