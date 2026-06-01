import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './GamePage.css';
import { JOGOS_DATA } from '../../data/jogos';



export default function GamePage() {
  const { ano, id } = useParams()
  const navigate = useNavigate();

  

  const jogo = JOGOS_DATA.find(lista=>lista.ano==ano).projetos[parseInt(id)];

  console.log(jogo)

  return (
    <main id="gamePageContainer">
      
      <section className="hero-section">
        <div className="hero-content-wrapper">
          

          <div className="hero-text-side">
            <Link to="/catalog">
              <button className="btn-back-gallery">
                <span className="arrow">←</span> Voltar para Galeria
              </button>
            </Link>
            
            <h1 className="game-main-title">{jogo.titulo}</h1>
            <p className="game-subtitle"><strong>{jogo.subtitulo}</strong> {jogo.sinopse}</p>
            
            
            <a href={jogo.url} target='_blank'>
              <button className="btn-play-now btn-primary">
                <span className="play-icon">▶</span> Jogue Agora!
              </button>
            </a>
          </div>

          <div className="hero-image-side">
            <div className="game-cover-wrapper">
              <img src={jogo.imagem} alt={jogo.titulo} />
            </div>
          </div>

        </div>

        <div className="hero-wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>
      </section>


      <section className="game-body-content">
        <div className="center-container">
          

          <div className="tech-badges-row">
            {jogo.habilidades.map((h)=>(
              <span className="tech-badge badge-blue">{h}</span>
            ))}

          </div>


          <div className="about-game-card">
            <h2>Sobre o Jogo</h2>
            <p><strong>{jogo.titulo}</strong>, {jogo.descricaoLonga}</p>
            <p>{jogo.chamadaFinal}</p>
          </div>


          <div className="magic-features-section">
            <h2 className="section-title">O que torna este jogo mágico?</h2>
            
            <div className="features-grid">

              {jogo.caracteristicas.map((c) =>(
                <div className="feature-card">
                  <div className="feature-icon-circle circle-yellow">{c.icon}</div>
                  <h3>{c.titulo}</h3>
                  <p>{c.descricao}</p>
                </div>
              ))}

            </div>
          </div>

          

        </div>
      </section>

      <section>
        
          {jogo.desenvolvedores && jogo.desenvolvedores.length > 0 && (
            <div className="developers-section">
              <h2 className="section-title">Criado por Universitários Extraordinários</h2>
              <div className="developers-grid">
                {jogo.desenvolvedores.map((dev, index) => (
                  <div key={index} className="developer-card">
                    <div className="developer-avatar-circle">🎓</div>
                    <h3>{dev}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}
      </section>

    </main>
  );
}