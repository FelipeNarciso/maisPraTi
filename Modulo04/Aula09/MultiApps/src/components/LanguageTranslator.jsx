import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Box = styled.div `
    padding-top: 1%;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    background-color: #fff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px 10px 10px;
    padding: 1%;
    text-align: center;
`

const Title = styled.h2`
    color: #333;
    text-align: center;
`

const Label = styled.label`
    color: #555;
`

const TranslatedText = styled.p`
    color: #333;
    border-radius:18px;
    text-align: center;
`

const LanguageTranslator = () => {

    const [text, setText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [sourceLang, setSourceLang] = useState('en')
    const [targetLang, setTargetLang] = useState('pt')

    const navigate = useNavigate()

    const translateText = async () => {
        try {
            const response = await axios.get('https://api.mymemory.translated.net/get', {
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`,
                },
            })

            setTranslatedText(response.data.responseData.translatedText)
        } catch (error) {
            console.error("Erro ao traduzir o texto: ", error)
        }
    }

    return (
        <Box>
            <Container>
                <Title>Language Translator</Title>
                <div>
                    <Label>Source Language:</Label>
                    <select value={sourceLang} onChange={(event) => setSourceLang(event.target.value)}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italiano</option>
                        <option value="pt">Portuguese</option>
                    </select>
                </div>

                <div>
                    <Label>Target Language:</Label>
                    <select value={targetLang} onChange={(event) => setTargetLang(event.target.value)}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italiano</option>
                        <option value="pt">Portuguese</option>
                    </select>
                </div>

                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder='Informe o texto que quer traduzir'
                />

                <button onClick={translateText}>Translate</button>

                {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
                <Link to={'/'}><button>Sair</button></Link>
            </Container>
        </Box>

    )
}

export default LanguageTranslator