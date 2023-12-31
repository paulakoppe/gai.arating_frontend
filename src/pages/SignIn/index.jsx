import { useState } from 'react'; 
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { FiMail, FiLock} from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'

import { useAuth } from "../../hooks/auth"

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password })
    }
    return (
        <Container>
            <Form>
            <h1>gai.a rating</h1>
            <p>Aplicação para ranquear e compartilhar suas leituras &#58;&#41;</p>
            
            <h2>Faça seu login</h2>

            <Input
            placeholder="email"
            type="text"
            icon={FiMail}
            onChange = {e => setEmail(e.target.value)}
            />

            <Input 
            placeholder="senha"
            type="password"
            icon={FiLock}
            onChange = {e => setPassword(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSignIn();
                }
              }}

            />

            <Button
            title="Entrar"
            onClick = {handleSignIn}
            />
                
            <Link to="/register">
                Criar conta
            </Link>

           </Form>

           <Background/>
        </Container>
    )
}