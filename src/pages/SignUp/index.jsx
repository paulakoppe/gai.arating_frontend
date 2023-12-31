import { Container, Form, Background } from "./styles";
import { useState } from "react";
import { FiMail, FiLock, FiUser} from 'react-icons/fi'

import { api } from "../../services/api"

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { Link, useNavigate } from "react-router-dom";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
   
    function handleSignUp() {
       if(!name || !email || !password ) {
        return alert ("Preencha todos os campos");
       }

       api.post("/users", { name, email, password})
       .then (() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/")
       })
       .catch(error => {
        if(error.response){
            alert(error.response.data.message)
        } else {
            alert("Não foi possível cadastrar5 o usuário")
        }
       }) 
   
   
    }

    return (    
        <Container>
             <Background/>
            <Form>
            <h1>gai.a rating</h1>
            <p>Aplicação para ranquear e compartilhar suas leituras &#58;&#41;</p>
            
            <h2>Crie sua conta</h2>

            <Input
            placeholder="nome"
            type="text"
            icon={FiUser}
            onChange={e => setName(e.target.value)}
            />

            <Input
            placeholder="email"
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
            />

            <Input 
            placeholder="senha"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSignUp();
                }
              }}
            />

            <Button
            title="Cadastrar" 
            onClick = {handleSignUp}
            />
                
            <Link to="/">
                Voltar para o login
            </Link>

           </Form>

          
        </Container>
    )
}