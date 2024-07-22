import { useState, useEffect } from "react"
import styles from './PersistentCounter.module.css'


function PersistentCounter() {


    const getItem = () => {
        const num = localStorage.getItem('item')
        return num !== null ? parseInt(num) : 0
    }

    const [contador, setContador] = useState(getItem)

    useEffect(() => {
        localStorage.setItem('item', contador)
    }, [contador]);

    return (
        <div className={styles.box}>
            <h1>Exercício 03</h1>
            <h3>Sincronização de Estado com Local Storage</h3>
            <p>Número salvo no Local Storage: {contador}</p>
            <button onClick={() => { setContador(contador + 1) }}>Incrementar</button>
            <button onClick={() => { setContador(contador - 1) }}>Decrementar</button>
        </div>
    )
}
export default PersistentCounter