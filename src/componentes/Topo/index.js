import './style.css';
import { Link } from "react-router-dom";


export default function Topo() {

  return (
    <div >

      <header>
        <div className="limitar-secao">
          <img className="logomarca" src="assets/barbearia-logo.png" alt="logomarca"/>
        
        <nav>
          <Link className="link-topo" to="/">Início</Link>
          <Link className="link-topo" to="/Cortes">Cortes</Link>
          <Link className="link-topo" to="/Informacoes">Info</Link>
        </nav>

        </div>
      </header>

    </div>
  );
}