import logoETicketsBR from '../assets/images/logo-eticketsbr.png'

import '../assets/css/tickets.css'

export function Tickets() {
  return (
    <div id="tickets" className="container">
      <p>Ticketeira oficial</p>
      <a href="https://eticketbr.com.br/" target='_blank'>
        <img src={ logoETicketsBR } alt="Logotipo ETicketsBR" />
      </a>
    </div>
  )
}