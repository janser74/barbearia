import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import './style.css';

export default function Cortes() {

  return(
    <div>
      <Topo />

      <main>
        <section className="secao-banner-precos">
          <div className="titulo-banner-precos">
            <h1>TABELA DE PREÇOS</h1>
          </div>
        </section>

        <section className="box-tabela-precos">
        <table className="tabela-precos">
        <thead>
          <tr>
            <th>
              <h3>SERVIÇO</h3>
              <p>O melhor do vale Jequitinhonha</p>
            </th>
            <th>
              <h3>PREÇOS</h3>
              <p>Os melhores preços da região</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="linha-impar">
            <td>CORTE NA MÁQUINA (DIVERSOS)</td>
            <td>R$ 25,00</td>         
          </tr>

          <tr class="linha-par">
            <td>CORTE NA TESOURA</td>
            <td>R$ 30,00</td>            
          </tr>

          <tr class="linha-impar">
            <td>CORTE COM DESENHO</td>
            <td>R$ 45,00</td>            
          </tr>

          <tr class="linha-par">
            <td>PÉZINHO</td>
            <td>R$ 5,00</td>
          </tr>

          <tr class="linha-impar">
            <td>BARBA</td>
            <td>R$ 25,00</td>
          </tr>

          <tr class="linha-par">
            <td>SOMBRANCELHA</td>
            <td>R$ 8,00</td>
          </tr>

          <tr class="linha-impar">
            <td>CORTE+BARBA</td>
            <td>R$ 45,00</td>
          </tr>

          <tr class="linha-par">
            <td>CORTE+BARBA+SOMBRANCELHA</td>
            <td>R$ 50,00</td>
          </tr>

          <tr class="linha-impar">
            <td>LUZES</td>
            <td>R$ 50,00</td>
          </tr>

          <tr class="linha-par">
            <td>PLATINADO</td>
            <td>R$ 90,00</td>
          </tr>

          <tr class="linha-impar">
            <td>PROGRESSIVA</td>
            <td>R$ 80,00</td>
          </tr>

          <tr class="linha-par">
            <td>DEMAIS SERVIÇOS</td>
            <td>R$ consulte com o barbeiro</td>
          </tr>

        </tbody>
      </table>
        </section>

      </main>

      <Rodape />

    </div>
  )
}