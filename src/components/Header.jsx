import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import img from "../assets/imgs/perfil.jpg"
import {RxExit} from "react-icons/rx"

export default function Header(){

    const navigate = useNavigate()

    const [user,setUser] = useState({name:"",photo:""})

    const config = {headers: 
        {Authorization: `Bearer ${localStorage.getItem("token")}`}}

    useEffect(()=>{

        if(!localStorage.getItem("token")) navigate("/")
        
        axios.get(`${import.meta.env.VITE_API_URL}/`,config)
        .then((res)=>{
            
            let {name,photo} = res.data
            if(!photo) photo = img
            setUser({name,photo})
        })
        .catch((err)=>{
            
            if(!err.response) alert(err.message)
        })

    },[])

    function handleExit(){
        localStorage.removeItem("token")
        navigate("/")
    }


    return (
        <Head>
            <h2 onClick={()=>navigate("/feed")}>Fomebook</h2>
        
            <div>
                <p>{user.name}</p>
                
                <img src={user.photo} onClick={()=> navigate("/me")}/>
                <RxExit onClick={handleExit}/>
            </div>
        </Head>
    )
}

const Head = styled.div`
    width: 100%;
    padding: 2vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #D3E4CD;
    position: fixed;
    top: 0;
    z-index: 10;
    box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.82);
    

    div {
        display: flex;
        justify-content: center;
        align-items: center;


        img {
            height: 65px;
            width: 65px;
            background-size: contain;
            border-radius: 50%;
            padding: 1px;
            outline: solid 1px #4e4e4e;
            margin: 0px 12px;
        }

        @media (max-width: 480px) {
        h4{display: none}
        }
    }
    
`


