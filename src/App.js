import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Introducao from './components/Introducao';
import Noticias from './components/Noticias';
import Projetos from './components/Projetos';
import Equipe from './components/Equipe';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introducao />
      <Noticias />
      <Projetos />
      <Equipe />
      <Footer />
    </div>
  );
}

export default App;
