import { styled } from "styled-components"
import {useForm} from "react-hook-form"

export default function SignUp(){

    const {register, handleSubmit, formState: { errors },getValues} = useForm()


    const onSubmit = (e) =>{
        console.log(e)
    }

    const checkPassword = (confirm)=>{
        if(getValues("password") !==confirm){
            return "Senhas diferentes"
        }
   }


    
    return (
        <Container>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" >Nome:</label>
                <input type="text" name="name" {...register("name", { required: "insira o nome", maxLength: {value: 50, message: "máximo de 50 caracteres"} })}/>
                {errors?.name && <small>{errors.name.message}</small>}
                <label htmlFor="name" >E-mail:</label>
                <input type="email" name="email" {...register("email", { required: "insira o email", maxLength: {value: 50, message: "máximo de 50 caracteres"} })}/>
                {errors?.email && <small>{errors.email.message}</small>}
                <label htmlFor="name" >Username: </label>
                <input type="text" name="username" {...register("username", { required: "insira o username", maxLength: {value: 50, message: "máximo de 50 caracteres"} })}/>
                {errors?.username && <small>{errors.username.message}</small>}
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
            </form>

        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    min-height: 500px;
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