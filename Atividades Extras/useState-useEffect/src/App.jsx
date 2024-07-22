import './App.css'
import TitleUpdater from './components/TitleUpdater'
import WindowSize from './components/WindowSize'
import PersistentCounter from './components/PersistentCounter'
import RealTimeClock from './components/RealTimeClock'
import ToggleText from './components/ToggleText'
import LimitedCounter from './components/LimitedCounter'

function App() {
  return (
    <>
    <div className='body'>
      <TitleUpdater/>
      <WindowSize/>
      <PersistentCounter/>
    </div>
    <div className='body'>
      <RealTimeClock/>
      <ToggleText/>
      <LimitedCounter/>
    </div>
    </>
  )
}

export default App
