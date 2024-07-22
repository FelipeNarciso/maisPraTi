import { useState, useEffect } from "react"
import styles from './RealTimeClock.module.css'

function RealTimeClock() {

    const [hora, setHora] = useState(new Date())

    useEffect (() => {
        const intervalo = setInterval(() => {
            setHora(new Date())
        }, 1000)
        
        return () => clearInterval(intervalo)
    }, [])

    

    return (
        <div className={styles.box}>
            <h1>EXERCÍCIO 04</h1>
            <h3>Relógio digital que atualiza a hora a cada segundo.</h3>
            <h3>{`${hora.getHours()} : ${hora.getMinutes()} : ${hora.getSeconds()} `}</h3>
        </div>
    )
}
export default RealTimeClock