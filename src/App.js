import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonias/Testimonials';

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
    </>
  );
}

export default App;
