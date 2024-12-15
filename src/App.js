import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonias/Testimonials';
import Zap from './assets/zap.png'

function App() {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <Home></Home>
        <Portfolio></Portfolio>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Testimonials></Testimonials>
      </main>
      <a
        href="https://wa.me/5591982265217"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Zap} // Caminho para o ícone
          alt="WhatsApp"
        />
      </a>
    </>
  );
}

export default App;
