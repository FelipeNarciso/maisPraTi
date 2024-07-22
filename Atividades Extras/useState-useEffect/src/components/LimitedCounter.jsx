import { useState } from "react"
import styles from './LimitedCounter.module.css'

function  LimitedCounter() {

    const [counter, setCounter] = useState(0)
    const [limite, setLimite] = useState('')

    const incrementar = () => {
        if(counter >= 10){
            setLimite('Limite máximo atingido!')
        }else{
            setLimite('')
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        setLimite('')
        setCounter(counter - 1)
    }

    return(
        <div className={styles.box}>
            <h1>Exercício 06</h1>
            <h3>Contador com Limite</h3>
            <h3>{limite}</h3>
            <h3>{counter}</h3>
            <button onClick={() => {incrementar()}}>Incrementar</button>
            <button onClick={() => {decrementar()}}>Decrementar</button>
        </div>
    )
}
export default LimitedCounter