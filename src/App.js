import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <Home></Home>
      </main>
    </>
  );
}

export default App;
