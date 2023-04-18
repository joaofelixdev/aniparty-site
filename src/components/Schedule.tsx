import coverChuuninShikenMaior from '../assets/images/edicoes/schedule-cover-chunnin-shiken-maior.png';
import coverExameHunterMenor from '../assets/images/edicoes/schedule-cover-exame-hunter-menor.png';
import coverDefinirMenor from '../assets/images/edicoes/schedule-cover-a-definir-menor.png';

import '../assets/css/home/schedule.css';

export function Schedule() {
  return (
    <section id="schedule" className="container">
      <div className="column-left">
        <h2>Agenda</h2>
        <p>confira nossas próximas edições, clique aqui para ver a agenda completa</p>
        <div className="edicaoAnterior">
          <p className="edicaoLabel">Edição anterior</p>
          <div className="cardEdicaoAnterior">
            <img src={coverExameHunterMenor} alt="Imagem de fundo da edição" />
            <div className="cardDataLocal">
              <p className='data'>22.abr.23</p>
              <p className="local">Triplex Club</p>
            </div>
            <label className="eventName">Em busca do one piece</label>
            <label className='soldOutLabel'>SOLD OUT</label>
          </div>
        </div>
        <div className="edicaoFutura">
          <p className="edicaoLabel">Edição futura</p>
          <div className="cardEdicaoFutura">
            <img src={coverDefinirMenor} alt="Imagem de fundo de um edição não definida" />
            <div className="cardDataLocal">
              <p className='data'>XX.XX.XX</p>
              <p className="local">???</p>
            </div>
            <div className="eventInfo">
              <label className="eventName">A definir</label>
              <label className='coomingSoonLabel'>Novidades em breve</label>
            </div>
          </div>
        </div>
      </div>
      <div className="column-right">
        <div className="proximaEdicao">
          <p className="edicaoLabel">Próxima Edição</p>
          <div className="eventInfo" style={{ backgroundImage: `url(${coverChuuninShikenMaior})` }}>
            <label className='eventName'>Arraial Otaku</label>
            <div className="dateAndPlace">
              <p className='date'>25 de fevereiro</p>
              <p className="place">Jai Club / SP</p>
            </div>
            <a href="#" className="btnBuyNow">
              Garanta já seu ingresso
            </a>
          </div>
          {/* <img src={coverChuuninShikenMaior} alt="Imagem de fundo da próxima edição" /> */}
        </div>
      </div>
    </section>
  );
}