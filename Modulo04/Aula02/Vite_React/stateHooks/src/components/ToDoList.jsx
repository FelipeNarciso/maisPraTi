import { useState } from "react"

function ToDoList(){
    const [toDos, setTodos] = useState([])
    const [inputsValue , setInputValue] = useState('')
    const addToDo = () => {
        setTodos ([... toDos, inputsValue ])
        setInputValue('')
    }
    return (
       <div>
        <input type="text" value={inputsValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addToDo}>Adicionar Tarefa</button>

        <ul>
            {toDos.map((toDos, index) => (
                <li key = {index} >{toDos}</li>
            ))}
        </ul>
       </div>
    )
}

export default ToDoList