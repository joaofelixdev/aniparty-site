import InstagramIcon from '../assets/images/social-icons/instagram-icon.png'

import '../assets/css/socialCube.css'

type SocialData = {
  url: string,
  icon: string
}

export function SocialCube({ url, icon }: SocialData) {
  return (
    <a href={ url } className="socialCube">
      <img src={ icon } alt="Instagram Icon" />
    </a>
  )
}