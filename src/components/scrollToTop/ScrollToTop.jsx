import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Força o scroll para o topo de forma instantânea
    window.scrollTo({
    top: 0,
    behavior: 'smooth' // Remove o pulo seco e desliza suavemente
  });
    
    // Se preferir um efeito de rolagem suave, use:
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]); // Executa o efeito toda vez que o pathname mudar

  return null; // Este componente não renderiza nada na tela
}