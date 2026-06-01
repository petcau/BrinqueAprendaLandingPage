import './About.css';

export default function About() {

  return (
    <section id='about'>
      <div className="onda-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="onda-path"></path>
        </svg>
      </div>

      
      <h2>Sobre o projeto</h2>


      <div id="descriptionWraper">
        <div>
          
          <p>O Brinque e Aprenda é uma iniciativa educacional e tecnológica idealizada pelo Professor Peterson Lobato no âmbito da Universidade do Estado da Bahia (UNEB). O projeto nasce da convicção de que o ambiente digital, quando aliado à ludicidade e à intencionalidade pedagógica, torna-se um poderoso catalisador para o desenvolvimento infantil.</p>

          <p>Nossa missão é transformar o aprendizado de conceitos fundamentais, como matemática, alfabetização, raciocínio lógico e conscientização ambiental, em uma jornada interativa, leve e divertida.</p>

          <p>Desenvolvemos uma coletânea de jogos digitais pensados sob medida para crianças em fase de alfabetização e anos iniciais do Ensino Fundamental. Cada jogo é cuidadosamente projetado para respeitar o ritmo do aprendizado infantil, unindo mecânicas instigantes a desafios educativos que estimulam a curiosidade e a autonomia.</p>
          
        </div>
        <img src="/assets/amazonia.png" alt="" />

      </div>


    </section>
  );
}