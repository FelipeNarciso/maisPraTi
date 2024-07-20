import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/Login' element = {<Login/>}/>
          <Route
          path = '/Home'>
            
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
