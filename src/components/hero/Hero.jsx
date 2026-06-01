import './Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Projeto Brinque e <span>Aprenda</span></h1>
        <p>
          Plataforma de jogos educativos desenvolvida por estudantes universitários para potencializar o aprendizado de crianças de 5 a 10 anos através de experiências lúdicas e pedagógicas.
        </p>
        <div className="hero-buttons">
          <Link to="/catalog">
            <button className="btn-primary">Jogue Agora!</button>
          </Link>

          <a href="/#about">
            <button className="btn-secondary">Saiba Mais</button>
          </a>
        </div>
      </div>
    </section>
  );
}