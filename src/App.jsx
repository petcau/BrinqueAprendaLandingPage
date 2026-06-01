import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';
import GamePage from './pages/gamePage/GamePage';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <header>

      <Link to="/">
          <img style={{ width: '100px' }} src="https://brinqueaprenda.com.br/assets/logo-portal-prime-CL_c3ozH.png" alt="" />
      </Link>

      <nav style={{ display: 'flex', gap: '10px', alignItems:"center" }}>
          <Link to="/">Início</Link>
          <Link to="/catalog">
            <button className="btn-primary">Nossos Jogos!</button>
          </Link>
      </nav>
      </header>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:ano/:id" element={<GamePage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>

      <Footer></Footer>

    </BrowserRouter>
  )
}

export default App
