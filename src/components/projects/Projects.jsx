import { Link } from 'react-router-dom';
import ProjectThumb from '../projectThumb/ProjectThumb';
import './Projects.css';
import { JOGOS_DATA } from '../../data/jogos';

export default function Projects() {

  const jogos = JOGOS_DATA[JOGOS_DATA.length-1].projetos
  const lastYear = JOGOS_DATA[JOGOS_DATA.length-1].ano

  return (
    <section id='projects'>

      <div className="onda-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="onda-path"></path>
        </svg>
      </div>

      <h2>Nossos Jogos Mais Recentes</h2>

      
      <div className='projects-grid'>

        {jogos.slice(0, 3).map((j, i) => (
          <ProjectThumb
            key={i}
            imageSrc={j.imagem}
            altText={`Descrição da imagem ${i.titulo}`}
            projectId={i}
            projectYear={lastYear}
            title={j.titulo}
          />
        ))}

      </div>
      <Link to="/catalog">
        <button className="btn-primary" style={{ display: 'block', margin: '2rem auto'}}>Conheça todos os nossos jogos</button>
      </Link>
    </section>
  );
}