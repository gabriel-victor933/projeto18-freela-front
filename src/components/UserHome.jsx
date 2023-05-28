import { styled } from "styled-components"
import { Container } from "../style/container"
import img from "../assets/imgs/perfil.jpg"
import {SlUserFollow, SlUserFollowing, SlUserUnfollow} from "react-icons/sl";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function UserHome({id}){

    const [userState,setUserState] = useState({})
    const userRef = useRef()
    const navigate = useNavigate()

    const config = {headers: 
        {Authorization: `Bearer ${localStorage.getItem("token")}`}}

    useEffect(()=>{
        getUser()
    },[])

    function getUser(){
        axios.get(`${import.meta.env.VITE_API_URL}/user/${id}`,config)
        .then((res)=>{

            
            if(res.data.photo){
                const {biography,id,photo,username} = res.data
                userRef.current = {biography,id,photo,username}
                const {isfollowing,seguidores,seguindo} = res.data
                setUserState({isfollowing,seguidores,seguindo})
            } else {
                
                const {biography,id,username} = res.data
                userRef.current = {biography,id,photo: img,username}
                const {isfollowing,seguidores,seguindo} = res.data
                setUserState({isfollowing,seguidores,seguindo})
            }
            
        })
        .catch((err)=>{
            console.log(err)
            if(!err.response) alert(err.message)
            navigate("*")
        })
    }

    function followUser(){
        const data = {}
        axios.post(`${import.meta.env.VITE_API_URL}/follow/${id}`,data,config)
        .then((res)=>{
            const novo = parseInt(userState.seguidores) + 1;
            setUserState({...userState, isfollowing: "1",seguidores: novo})
        })
        .catch((err)=>{
            console.log(err)
            if(!err.response) alert(err.message)
            getUser()
        })
    }
    
    function removeFollow(){
        
        axios.delete(`${import.meta.env.VITE_API_URL}/follow/${id}`,config)
        .then((res)=>{
            const novo = parseInt(userState.seguidores) - 1;
            setUserState({...userState, isfollowing: "0",seguidores: novo})
        })
        .catch((err)=>{
            console.log(err)
            if(!err.response) alert(err.message)
            getUser()
        })
    }

    return (
        <Container>
            <Home>
            <div>
                <img src={userRef.current?.photo}/>
                <h3>{userRef.current?.username}</h3>
                {userState.isfollowing == "1" ? <SlUserFollowing size="25px" onClick={removeFollow}/> :<SlUserFollow size="25px" onClick={followUser}/>}
                </div>
                <div>
                <p>{userRef.current?.biography}</p>
                </div>
                <small>{userState?.seguidores} <strong>seguidores</strong></small>
                <small>{userState?.seguindo} <strong>seguindo</strong></small> 
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