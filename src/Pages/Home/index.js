import { useRef } from 'react';
import { useState } from 'react';
import React from "react";
import axios from 'axios';
import People from '../../assets/Consulting_Isometric 1.svg'
import Arrow from '../../assets/arrow.svg'
import { useNavigate } from 'react-router-dom';
import H1 from '../../components/Title';
import Box2 from '../../components/Box/index';
import Button from '../../components/Button/index';
import {
    Box,
    Image,
    Inputlabel,
    Input,
} from "./styles";


const App = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    const inputName = useRef()
    const inputAge = useRef()

    async function addNewUser() {
        const { data: newUser } = await axios.post("http://localhost:3005/users", { name: inputName.current.value, age: inputAge.current.value });

        setUsers([...users, newUser]);
        navigate ("/usuarios")
    }


    return (
        <Box>
            <Image alt="imagePeople" src={People} />

            <Box2>
                <H1>Olá!</H1>
                <Inputlabel>Nome</Inputlabel>
                <Input ref={inputName} placeholder="nome" />
                <Inputlabel>Idade</Inputlabel>
                <Input ref={inputAge} placeholder="idade" />
                <Button  onClick={addNewUser}>Cadastrar<img alt='seta' src={Arrow} /></Button>
            </Box2>
        </Box>

    );

}

export default App;
