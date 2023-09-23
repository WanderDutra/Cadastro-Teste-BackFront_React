
import { useState } from 'react';
import { useEffect } from 'react';
import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Peoples from '../../assets/User Profile_Monochromatic 2.svg'
import Arrow from '../../assets/arrowreverse.png'
import Loot from '../../assets/loot.svg'
import H1 from '../../components/Title/index';
import Box2 from '../../components/Box/index';
import Button from '../../components/Button/index';
import {
    Box,
    Image,
    User,
} from "./styles";


const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
      console.log(navigate)
    async function deleteUser(userid) {
        await axios.delete(`http://localhost:3005/users/${userid}`)
        const newUsers = users.filter((user) => user.id !== userid);
        setUsers(newUsers);
    }
    useEffect(() => {
        async function upUsers() {
            const { data: newUser } = await axios.get("http://localhost:3005/users");

            setUsers(newUser);
        }

        upUsers()
    }, [])

    function goBackPage(){
navigate("/")

}

    return (
        <Box>
            <Image alt="imagePeoples" src={Peoples} />

            <Box2 isBlur={true}>
                <H1>Usuários</H1>


                <ul>
                    {users.map((user) => (
                        <User key={user.id}>
                            <p>{user.name}</p> - <p>{user.age}</p>
                            <button onClick={() => deleteUser(user.id)}><img alt='loot' src={Loot} /></button>
                        </User>
                    ))}
                </ul>
                <Button onClick={goBackPage} isTransparent={true}><img alt='seta' src={Arrow} />Voltar</Button>


            </Box2>
        </Box>

    );

}

export default Users;
