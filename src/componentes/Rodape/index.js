import './style.css'

export default function Rodape() {
  return(
    <footer>
      <div className=' limitar-secao container-logo-informacoes'>
        <img src='assets/barbearia-logo.png' alt='logomarca'/>
        <div>
          <h3>ENDEREÇO</h3>
          <p>Rua Dom José de Hás - S/N</p>
          <p>Araçuai, MG 39600-000</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (31) 99970-8882</p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>ABERTO DE SEGUNDA A SABÁDO</p>
          <p>10:00 - 20:00</p>
        </div>
      </div>
      <div className='limitar-secao direito-autoral'>
        <p>BarberShop. Orgulhosamente desenvolvido por "Janser Souza"</p>
      </div>
    </footer>
  )
}