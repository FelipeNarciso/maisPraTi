import { useState } from "react"

function aba1(){
        return(
            <ul>
                <li>Palavra1</li>
                <li>Palavra2</li>
            </ul>
        )
    }

    function aba2(){
        return(
            <ul>
                <li>Palavra4</li>
                <li>Palavra5</li>
                <li>Palavra6</li>
            </ul>
        )
    }

    function aba3(){
        return(
            <ul>
                <li>Palavra7</li>
                <li>Palavra8</li>
                <li>Palavra9</li>
            </ul>
        )
    }

    function aba4(){
        return(
            <ul>
                <li>Palavra10</li>
                <li>Palavra11</li>
                <li>Palavra12</li>
                <li>Palavra13</li>
            </ul>
        )
    }


function Abas(){
    const [troca , setTroca] = useState('')
    
    return (

        <div>
            <button onClick={() => {setTroca(aba1)}}>Teste1</button> 
            <button onClick={() => {setTroca(aba2)}}>Teste2</button>  
            <button onClick={() => {setTroca(aba3)}}>Teste3</button> 
            <button onClick={() => {setTroca(aba4)}}>Teste4</button>

            
            <p>{troca}</p>
        </div>
    )

}

export default Abas