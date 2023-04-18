import checkKunai from '../../src/assets/images/check-kunai.png';
import aniPartyFesta from '../../src/assets/images/aniparty-foto-festa.png';

import '../assets/css/home/about.css';

export function About() {
  return(
    <section className="about container">
      <div className='column-left'>
        <h1>A festa mais otaku do brasil</h1>
        <p className="about-text">
          Criada em 2022 por apaixonados por animes e por festas, a AniParty
          nasceu com a ideia de trazer mais entretenimento para a comunidade otaku,
          unido a uma festa incrível, muitos cosplayers e novos amigos. Essa é a 
          fórmula para fazer a festa perfeita e você acabou de encontrar! 
        </p>
        <ul>
          <li>
            <img src={checkKunai} alt="" />
            6 horas de festa, 100% open bar
          </li>
          <li>
            <img src={checkKunai} alt="" />
            Muitos cosplayers e influenciadores
          </li>
          <li>
            <img src={checkKunai} alt="" />
            Todas as músicas dos seus animes favoritos
          </li>
          <li>
            <img src={checkKunai} alt="" />
            O melhor lugar para fazer novos amigos
          </li>
          <li className='btnBuyNow'>
            <a href="#">
              Você não vai ficar de fora né?! Vem pra AniParty
            </a>
          </li>
        </ul>
      </div>
      <div className='column-right'>
        <img src={aniPartyFesta} alt="" />
      </div>
    </section>
  );
}