import { useState } from "react"
import styles from './TextArea.module.css'

function TextArea(){
    const [text, setText] = useState()
    return (
        <div>
            <input className={styles.teste} type="textArea" id="txt" onChange={() => setText(document.getElementById('txt').value)}/>
            <p>Você digitou {text} </p>
        </div>
    )
}


export default TextArea