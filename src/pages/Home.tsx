import { Header } from '../components/Header';
import { About } from '../components/About';
import { Schedule } from '../components/Schedule';
import { SpotifyPlaylist } from '../components/SpotifyPlaylist';
import { SocialNetworks } from '../components/SocialNetworks';
import { Tickets } from '../components/Tickets';

export function Home() {
  return (
    <div>
      <Header />
      <About />
      <Schedule />
      <SpotifyPlaylist />
      <SocialNetworks />
      <Tickets />
    </div>
  )
}