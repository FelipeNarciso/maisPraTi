import './App.css'
import LanguageTranslator from './components/LanguageTranslator'
import MovieSearchEngine from './components/MovieSearchEngine'
import QrCodeGenerator from './components/QrCodeGenerator'
import IPAdressFinder from './components/IPAdressFinder'
import Login from './components/Login'


function App() {
  return (
    <>
      <div>
        <LanguageTranslator/>
        <MovieSearchEngine/>
        <QrCodeGenerator/>
        <IPAdressFinder/>
        <Login/>
      </div>
    </>
  )
}

export default App
