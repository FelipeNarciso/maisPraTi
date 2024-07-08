import { useState } from "react"

function Counter(){
    const [count , setCount] = useState(0)
    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1) }>
                Clique Aqui
            </button>
        </div>
    )
}

export default Counter