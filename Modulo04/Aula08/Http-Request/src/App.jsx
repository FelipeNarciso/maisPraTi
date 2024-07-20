import './App.css'
import DeleteUser from './components/DeleteUser'
import Formulario from './components/Formulario'
import GetUser from './components/GetUser'
import UpdateUser from './components/PutUser'


function App() {
  return (
    <>
      <Formulario/>
      <GetUser/>
      <UpdateUser/>
      <DeleteUser/>
    </>
  )
}

export default App
