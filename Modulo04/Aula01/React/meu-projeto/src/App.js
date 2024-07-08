import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Props from './components/Props';
import Footer from './components/Footer';


function App() {
  return (
    <div>
       <header>
        <Header/>
      </header>
      <div>
        <Props autor = 'Jaques' livroFavorito = 'Difícil'/>
      </div>
      <footer>
        <Footer nome1 = 'João' nome2 = 'Maria' nome3 = 'José'/>
      </footer>
    </div>
     
    
  );
}

export default App;
