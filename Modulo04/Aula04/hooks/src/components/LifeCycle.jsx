import { useEffect, useState } from "react";

function TimerComponent() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(prevCont => prevCont + 1)
        }, 1000)
        return () => {
            clearInterval(timerId)
            console.log('Timer foi limpo')
        }
    }, [])
    return (
        <>
            <h1>{count}</h1>
        </>
    )
}

export default TimerComponent