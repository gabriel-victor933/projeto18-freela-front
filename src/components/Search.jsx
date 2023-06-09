import {CiSearch} from "react-icons/ci"
import {AiOutlineClose} from "react-icons/ai"
import { Container } from "../style/container"
import { styled } from "styled-components"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import UserBlock from "./userBlock"

export default function Search(){

    const [users,setUsers] = useState([])
    const [searchBox,setSearchBox] = useState(false)

    const config = {headers: 
        {Authorization: `Bearer ${localStorage.getItem("token")}`}}

    useEffect(()=>{

        function handlePress(e){
            if(e.key == "Enter") handleSearch()
        }
        document.addEventListener("keydown",handlePress)

        return ()=>{
            document.removeEventListener("keydown",handlePress)
        }
    },[])

    function handleSearch(e){
        if(!e.target.value) return


        axios.get(`${import.meta.env.VITE_API_URL}/users?search=${e.target.value}`,config)
        .then((res)=>{
            setUsers(res.data)
            setSearchBox(true)
        })
    }

    function handleClose(){
        setSearchBox(false)
        setUsers([])
    }


    return (
        <Container>
            <Input>
                <input type="text" onChange={handleSearch} required/>
                <CiSearch className="icon" size="25px" onClick={handleSearch}/>
                
                {searchBox && <>{users.length !== 0 && <div className="users">
                <div className="icons"><AiOutlineClose size="25px" onClick={handleClose}/></div>
                    {users.map((user)=> <UserBlock key={user.id} username={user.username} photo={user.photo} id={user.id}/>)}
                </div>}

                {users.length === 0 && <div className="users">
                    Nenhum usuário encontrado
                    <AiOutlineClose className="close" size="25px" onClick={handleClose}/>
                </div>}</>}
            </Input>
        </Container>
    )
}

const Input = styled.div`
    width: 100%;
    height: 30px;
    position: relative;
    

    input {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        outline: none;
        border: none;

        &:hover {
            border: 1px solid #000000;
        }
    }

    .icon {
        position: absolute;
        z-index: 2;
        top: 50%;
        right: 0;
        transform: translate(0%,-50%);

    }

    .users {
        min-height: 50px;
        width: calc(100% + 30px);
        
        position: absolute;
        top: 55px;
        left: -15px;
        z-index: 2;
        background-color: #D3E4CD;
        border: 1px solid darkgray;
        border-radius: 10px;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        

        .icons{
            width: 100%;
            display: flex;
            justify-content: flex-end;
            .icone{
                align-self: flex-start;
            }
        }
    }

`