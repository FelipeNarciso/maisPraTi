import { useState } from 'react'
import './App.css'
import LanguageTranslator from './components/LanguageTranslator'
import MovieSearchEngine from './components/MovieSearchEngine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <LanguageTranslator/>
        <MovieSearchEngine/>
      </div>
    </>
  )
}

export default App
