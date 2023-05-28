import { styled } from "styled-components"
import {useForm} from "react-hook-form"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { Container } from "../style/container"
import {Forms} from "../style/forms"
import Header from "../components/Header"

export default function Edit(){

    const {register, handleSubmit, formState: { errors }} = useForm()
    const navigate = useNavigate()

    const config = {headers: 
        {Authorization: `Bearer ${localStorage.getItem("token")}`}}

    const onSubmit = (data) =>{

        
        axios.patch(`${import.meta.env.VITE_API_URL}/me`,data,config)
        .then((res)=>{
            navigate("/me")
        })
        .catch((err)=>{
            console.log(err)
            if(err.code = "EER_NETWORK") alert(`Não foi possivel editar a conta: ${err.message}`)
        })

    }

    function deleteClick(){

        if(! window.confirm("depois de excluir a conta não será possivel recuperar deseja continuar?")) return 0 

        
        axios.delete(`${import.meta.env.VITE_API_URL}/me`,config)
        .then((res)=>{
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
            if(err.code = "EER_NETWORK") alert(`Não foi possivel excluir a conta: ${err.message}`)
        }) 
    }


    
    return (
        <>
        <Header />
        <Container>
            <h2>Editar perfil</h2>
            <Forms onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" >Nome:</label>
                <input type="text" name="name" {...register("name", { required: "insira o nome", maxLength: {value: 50, message: "máximo de 50 caracteres"} })}/>
                {errors?.name && <small>{errors.name.message}</small>}
                <label htmlFor="photo" >Foto:</label>
                <input type="text" name="photo" {...register("photo", { pattern:{value: /^(https?|ftp):\/\/.*\.(jpeg|jpg|png|gif|bmp)$/, message: "insira um link válido (formato: http://...)"} })}/>
                {errors?.photo && <small>{errors.photo.message}</small>}
                <label htmlFor="biography" >Biografia:</label>
                <input type="text" name="biography" {...register("biography", {maxLength: {value: 200, message: "máximo de 200 caracteres"}})}/>
                {errors?.biography && <small>{errors.biography.message}</small>}
                <button>Alterar</button>
                <button onClick={deleteClick}>Excluir Conta</button>
            </Forms>
            
        </Container>
        </>
    )
}