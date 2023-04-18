import logoBrancoLongo from '../assets/images/aniparty-logo-branco-longo.png';

import '../assets/css/navHeader.css';

export function NavHeader() {
  return (
    <nav>
      <div className='container'>
        <a href="#" className="logoBrancoLongo">
          <img src={logoBrancoLongo} alt="Logo AniParty" />
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Agenda</a>
          </li>
          <li>
            <a href="#">Galeria</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
        <a href="#" className="btnCompreSeuIngresso">
          Compre seu ingresso
        </a>
      </div>
    </nav>
  )
}