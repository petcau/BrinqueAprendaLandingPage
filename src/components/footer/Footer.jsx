import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        
        <div className="footer-section brand">
          <h3>Projeto Brinque e Aprenda</h3>
          <p>Potencializando o aprendizado de crianças através de experiências lúdicas e pedagógicas.</p>
        </div>

        <div className="footer-section links">
          <h4>Navegação</h4>
          <ul>
            <li><Link to={"/"}>Início</Link></li>
            <li><Link to={"/catalog"}>Jogos</Link></li>
          </ul>
        </div>

        {/* <div className="footer-section contact">
          <h4>Contato</h4>
          <p>contato@brinqueaprenda.com</p>
          <div className="social-icons">
            <span className="icon" title="Instagram">📸</span>
            <span className="icon" title="YouTube">📺</span>
            <span className="icon" title="GitHub">💻</span>
          </div>
        </div> */}

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Brinque Aprenda. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}