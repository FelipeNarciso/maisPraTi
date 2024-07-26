import styled from "styled-components"
import { useState } from "react"


const Box = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 2%;
    
`
const LoginContent = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px 10px 10px;
    padding: 1%;
`
const Title = styled.h1`

`
const Input = styled.input`
    margin-top: 1%;
`
const Button = styled.button`
    margin-top: 3%;
`


function Login() {
    
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    const entrar = () => {
        if(login === 'admin' && senha === 'admin'){
            setMensagem('Entrou!')
        }else{
            setMensagem('Senha incorreta')
        }
    }

    return (
        <Box>
            <LoginContent>
                <Title>Login</Title>
                <Input type="text" placeholder="Login" onChange={(event) => {setLogin(event.target.value)}}/>
                <Input type="password" placeholder="Senha" onChange={(event) => {setSenha(event.target.value)}} />
                <Button onClick={entrar}>Entrar</Button>
                <p>{mensagem}</p> 
            </LoginContent>
        </Box>
    )
}
export default Login 