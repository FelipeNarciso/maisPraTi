import { useState } from "react"
import axios from 'axios'

function Formulario(){

    const [user, setUser] = useState({
        name: '' , 
        job: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await axios.post('https://reqres.in/api/users', user)
            

            console.log(response)

            alert(`Usuário criado com sucesso! ID ${response.data.id}, Nome: ${response.data.name}, Profissao: ${response.data.job}`)
        }catch (error) {
            console.error(error)
            alert('Erro ao criar o usuário')
        }
    }

    return(
        <div>
            <h1>Formulário de Cadastro</h1>
            <form onSubmit={handleSubmit}>
                Nome:
                <input type="text" name="name" value={user.name} onChange={handleChange}/>
                <br/>
                Profissão:
                <input type="text" name="job" value={user.job} onChange={handleChange}/>
                <br/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Formulario