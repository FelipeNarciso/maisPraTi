import { useState } from "react"
import styled from "styled-components"
import axios from 'axios'


const Box = styled.div `
    padding-top: 1%;
    display: flex;
    justify-content: center;
`
const Container = styled.div `
    background-color: #fff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px 10px 10px;
    padding: 1%;
    text-align: center;
`
const Title = styled.h1 `

`
const Input = styled.input `

`
const Button = styled.button `
`
const BoxIP = styled.div `

`
const P = styled.p `

`


function IPAdressFinder () {

    const [ip, setIp] = useState('')
    const [ipData, setIpData] = useState(null) 

    const requisitarIP = async () => {
        try{
            const response = await axios.get(`https://ipinfo.io/${ip}/json`)
            setIpData(response.data)
        }catch(error){
            console.error('Ocorreu um erro: ' , error)
        }
    }

    return (
        <Box>
            <Container>
                <Title>IP Finder</Title>
                <Input type="text" placeholder="Digite seu IP" value={ip} onChange={(event) => {setIp(event.target.value)}}/>
                <Button onClick={requisitarIP}>Achar IP</Button>

                {ipData && (
                    <BoxIP>
                        <P><strong>Cidade: </strong>{ipData.city}</P>
                        <P><strong>País: </strong>{ipData.country}</P>
                        <P><strong>Hostname: </strong>{ipData.hostname}</P>
                        <P><strong>Localização: </strong>{ipData.loc}</P>
                        <P><strong>Provedor: </strong>{ipData.org}</P>
                        <P><strong>CEP: </strong>{ipData.postal}</P>
                        <P><strong>Região: </strong>{ipData.region}</P>
                        <P><strong>Fuso Horário: </strong>{ipData.timezone}</P>
                    </BoxIP>
                )}
            </Container>
        </Box>
    )
}
export default IPAdressFinder