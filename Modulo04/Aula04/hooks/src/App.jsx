import { useState } from 'react'
import './App.css'
import TimerComponent from './components/LifeCycle'
import UserProfile from './components/User'

function App() {

  return (
    <>
      {/* <TimerComponent/> */}
      <UserProfile/>
      <NewsUpdated/>
    </>
  )
}

export default App
