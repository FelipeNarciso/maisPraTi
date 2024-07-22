import { useState, useEffect } from "react"
import styles from './WindowSize.module.css'

function WindowSize(){
    
    const [width, setWidth] = useState(window.innerWidth)
  
    const [heigth, setHeigth] = useState(window.innerHeight)

    function Monitoramento() {
        setWidth(window.innerWidth)
        setHeigth(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize' , () => {
            Monitoramento()
        })

        window.addEventListener('resize' , () => {
            Monitoramento()
        })
       
    }, [])

    return(
        <div className={styles.box}>
            <h1>Exercicio 02</h1>
            <h3>Monitoramento de Largura de Janela</h3>
            <p>Largura:{width} px</p>
            <p>Altura:{heigth} px</p>
              
        </div>
    )
}
export default WindowSize