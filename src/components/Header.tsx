import { NavHeader } from './NavHeader';

import '../assets/css/header.css';

export function Header() {
  return (
    <header>
      <NavHeader />
      <div className="container">
        <div className="eventInfo">
          <p className='nextEditionText'>Próxima edição</p>
          <p className='nextEditionTitle'>Arraial Otaku</p>
          <p className='nextEditionDate'>03 de junho</p>
          <p className='nextEditionPlace'>Fabrique / SP</p>
          <a href="" className='btnBuyNow'>
            Garanta já seu ingresso
          </a>
        </div>
      </div>
    </header>
  )
}