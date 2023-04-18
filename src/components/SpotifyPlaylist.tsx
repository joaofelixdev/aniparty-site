import spotifyPlaylistBackground from '../assets/images/fundo-spotify-playlist.png'
import spotifyCharacter from '../assets/images/spotify-character.png'
import spotifyLogo from '../assets/images/spotify-logo.png'

import '../assets/css/home/spotifyPlaylist.css'

export function SpotifyPlaylist() {
  return (
    <section id="spotifyPlaylist" className="container">
      <a href="">
        <div className="spotifyBanner" style={
          { backgroundImage: `url(${ spotifyPlaylistBackground })` }
        }>
          <div className="content">
            <img src={ spotifyCharacter } alt="Personagem do Vocaloid" className='spotifyCharacter' />
            <img src={ spotifyLogo } alt="Spotify Logo" className='spotifyLogo' />
            <p>AniParty no Spotify</p>
            <span>Suas músicas favoritas estão aqui</span>
          </div>
        </div>
      </a>
    </section>
  )
}