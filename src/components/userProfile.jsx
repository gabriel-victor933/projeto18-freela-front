import { styled } from "styled-components"
import { Container } from "../style/container"
import img from "../assets/imgs/perfil.jpg"
import {SlWrench} from "react-icons/sl";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function UserProfile(){
    
    const [user,setUser] = useState({})
    const navigate = useNavigate()

    const config = {headers: 
        {Authorization: `Bearer ${localStorage.getItem("token")}`}}

    useEffect(()=>{
        getUser()
    },[])

     function getUser(){
        axios.get(`${import.meta.env.VITE_API_URL}/me`,config)
        .then((res)=>{
            if(res.data.photo){
                setUser(res.data)
            } else {
                setUser({...res.data, photo: img})
            }
            
        })
        .catch((err)=>{
            console.log(err)
            if(!err.response) alert(err.message)
            navigate("/*")
        })
    } 


    return (
        <Container>
            <Home>
                <div>
                <img src={user?.photo}/>
                <h3>{user?.username}</h3>
                <SlWrench size="25px" onClick={()=>navigate("/edit")}/>
                </div>
                <div>
                <p>{user?.biography}</p>
                </div>
                <small>{user?.seguidores} <strong>seguidores</strong></small>
                <small>{user?.seguindo} <strong>seguindo</strong></small>
            </Home>
        </Container>
    )
}

const Home = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;

    div {    
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
        height: 100px;
        aspect-ratio: 1;
        border-radius: 50%;
    }

    }

    h3 {
        width: 60%;
    }

    
`