import { Link } from 'react-router-dom';
import ProjectThumb from '../../components/projectThumb/ProjectThumb';
import './Catalog.css';
import { JOGOS_DATA } from '../../data/jogos';

export default function Catalog() {

  const idAnoAleatorio=Math.floor(Math.random() * JOGOS_DATA.length);
  const idJogoAleatorio=Math.floor(Math.random() * JOGOS_DATA[idAnoAleatorio].projetos.length);
  const jogoAleatorio = JOGOS_DATA[idAnoAleatorio].projetos[idJogoAleatorio]
  
  return (
    <main id='catalogSection'>
      <header className="catalog-header">
        <h1>Nossos Jogos</h1>
      </header>

      <section id="capa">
        <div className="capa-content">
          <h2>Recomendação do dia: {jogoAleatorio.titulo}</h2>
          <p>{jogoAleatorio.sinopse}</p>
          <Link to={`/game/${JOGOS_DATA[idAnoAleatorio].ano}/${idJogoAleatorio}`}>
            <button className="btn-primary">Saiba mais</button>
          </Link>
        </div>
        <div className="capa-image-container">
          <img src={jogoAleatorio.imagem} alt={jogoAleatorio.titulo} />
        </div>
      </section>

      <section className="gameWraper">
        

        {JOGOS_DATA.slice().reverse().map((lista)=>(

          <div className="year-container">
            <h3 className="year-title">{lista.ano}</h3>
            <div className='projects-grid'>

              {lista.projetos.map((j, i) => (
                <ProjectThumb
                  key={`${lista.ano}-${i}`}
                  imageSrc={j.imagem}
                  altText={j.titulo}
                  projectId={i}
                  projectYear={lista.ano}
                  title={j.titulo}
                />
              ))}
            </div>
          </div>

        ))}


      </section>
    </main>
  );
}