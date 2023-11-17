import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import './style.css';

export default function Cortes() {

   

  return(
  <div >

      <Topo />

      <main>
        <section className="secao-banner-cortes">
          <div className="titulo-banner-cortes">
            <h1>NOSSOS PRINCIPAIS CORTES</h1>
          </div>
        </section>
      
        <section className="limitar-secao secao-cortes">
          <h2>CORTES</h2>
          <div className="container-cortes">
            <div className="box-cortes">
              <img src="assets/corte1.jpg" alt="Corte 1"/>
              <h3>O mais pedido</h3>
              <p>Para curtir o fim de semana.</p>
            </div>
            <div className="box-cortes">
              <img src="assets/corte2.jpg" alt="Corte 2"/>
              <h3>O queridinho</h3>
              <p>Para curtir uma praia.</p>
            </div>
            <div className="box-cortes">
              <img src="assets/corte3.jpg" alt="Corte 3"/>
              <h3>O corte dos influencers</h3>
              <p>Para arrasar na foto para o instagram.</p>
            </div>
            <div className="box-cortes">
              <img src="assets/corte5.jpg" alt="Corte 5"/>
              <h3>O corte poderoso</h3>
              <p>Sinta-se mais bonito.</p>
            </div>
            <div className="box-cortes">
              <img src="assets/corte6.jpg" alt="Corte 6"/>
              <h3>O corte jogador</h3>
              <p>O corte estilo jogador.</p>
            </div>
           
          </div>
        </section>

      </main>

      <Rodape />

    </div>
  )
}