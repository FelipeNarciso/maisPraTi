import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/ClassComponents'
import TimerComponent from './components/TimerComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent/>
      {/* <TimerComponent/> */}
    </>
  )
}

export default App
