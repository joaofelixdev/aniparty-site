import InstagramIcon from '../assets/images/social-icons/instagram-icon.png'
import TwitterIcon from '../assets/images/social-icons/twitter-icon.png'
import TikTokIcon from '../assets/images/social-icons/tiktok-icon.png'
import FacebookIcon from '../assets/images/social-icons/facebook-icon.png'

import { SocialCube } from './SocialCube'

import '../assets/css/socialNetworks.css'

export function SocialNetworks() {
  const socialNetworks = [
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: 'https://www.instagram.com/anipartybr'
    },
    {
      name: 'Twitter',
      icon: TwitterIcon,
      url: 'https://www.twitter.com/anipartybr'
    },
    {
      name: 'Tiktok',
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@anipartybr'
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      url: 'https://www.facebook.com/anipartybr'
    }
  ]

  return (
    <section id="socialNetworks" className="container">
      <h5>Segue a gente</h5>
      <h3>Nas redes socias</h3>

      <ul>
        { socialNetworks.map((socialNetwork) => (
          <li><SocialCube url={ socialNetwork.url } icon={ socialNetwork.icon } /></li>
        )) }
      </ul>
    </section>
  )
}