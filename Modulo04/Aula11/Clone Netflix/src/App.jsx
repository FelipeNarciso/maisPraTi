import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import PaginaInicial from './components/PaginaInicial'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/PaginaInicial" element={<PaginaInicial />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
