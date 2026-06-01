import Hero from '../../components/hero/Hero';
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';
import './Home.css';

export default function Home() {

  return (
    <main>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
    </main>
  );
}