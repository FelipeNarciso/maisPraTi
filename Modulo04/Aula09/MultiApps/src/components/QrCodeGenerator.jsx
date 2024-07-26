import { useState } from "react"
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const Box = styled.div `
    display: flex;
    justify-content:center;
`

const Container = styled.div`
    background-color: #fff;
    border-radius: 10px 10px 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    padding: 2%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`

`

const Input = styled.input`

`
const QRContainer = styled.div`
    margin-top: 5%;
`

function QrCodeGenerator() {

    const [texto, setTexto] = useState('')

    const textoQRCode = (event) => {
        setTexto(event.target.value)
    }

    return (
        <Box>
            <Container>
                <Title>QRCode Generator</Title>
                <Input type="text" placeholder="Escreva o texto do QRCode" value={texto} onChange={textoQRCode}/>

                {texto && (
                    <QRContainer><QRCode value={texto}/></QRContainer>
                )}
            </Container>
        </Box>

    )
}

export default QrCodeGenerator