import { useState } from "react"
import './Aba.module.css'

const conteudos = [
    [
        'Conteudo 0',
        'Conteudo 1',
        'Conteudo 3',
    ],
    [
        'Conteudo 4',
        'Conteudo 5',
        'Conteudo 6',
    ],
    [
        'Conteudo 7',
        'Conteudo 8',
        'Conteudo 9',
    ],
   
]

function Abas(){
    const [estadoAtual , setEstado] = useState(0)
    
    return (
        <>
            <div>
                <header>
                    <img src="" alt="imagem" />
                    <h1>Aula +praTi - React-Js</h1>
                    <p>Exercicio para treinar useState</p>
                </header>
            </div>

            <div id="abas">
                <nav>
                    <button onClick={() => setEstado(0)}>Botão 1</button>
                    <button onClick={() => setEstado(1)}>Botao 2</button>
                    <button onClick={() => setEstado(2)}>Botão 3</button>
                </nav>
            </div>

            <div id="conteudo">
                <ul>
                   {conteudos[estadoAtual].map((item) =>(
                        <li key = {item}>{item}</li>
                   ))}
                </ul>
            </div>
        </>
    )

}

export default Abas