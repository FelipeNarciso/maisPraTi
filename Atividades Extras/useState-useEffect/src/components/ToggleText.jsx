import { useState } from "react"
import styles from './ToggleText.module.css'

function ToggleText (){
    const [text, setText] = useState('O texto está visível!')

    const alternar = () => {
        setText(text === 'O texto está visível!' ? '' : 'O texto está visível!');
    }
    return(
        <div className={styles.box}>
            <h1>EXERCÍCIO 05</h1>
            <h3>Alterna entre exibir e esconder um texto</h3>
            <h3>{text}</h3>
            <button onClick={alternar}>Alternar</button>
        </div>
    )
}
export default ToggleText