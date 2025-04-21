import styles from '../styles/Home.module.css'
import Header from '../components/HeaderStuff/Header.jsx'
import Footer from '../components/FooterStuff/Footer.jsx'
import LandingCard from '../components/LandingCard/LandingCard.jsx'
import Link from 'next/link.js'
import CleanImageListing from '../components/CleanImageListing/CleanImageListing.jsx'
import CleanImageCard from '../components/CleanImageListing/CleanImageCard.jsx'
import GridPatternBackground from '../components/GridPatternBackground/GridPatternBackground.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <LandingCard theme="dark">
        <GridPatternBackground bpm={174*4}
          pattern={{
            "Kick": "1000000000100000",
            "Snare": "0000100000001000",
            "Ghost": "0000000101000001",
            "Hat": "0010001010000010",
            "Ride": "1000100010001000"
          }}
        />
        <h1>Hellooooooo.</h1>
        <h2>I&apos;m Brandon Lee</h2>
        <p>You might know me as a developer interested in full-stack web development and cloud computing.</p>
        <p>You might also know me as a music producer and DJ through a number of FL Studio and EDM adjacent communities.</p>
        <p>Or, you might not know me at all.</p>
        <p>Either way, welcome to my very green and mildly humble abode on the internet.</p>
      </LandingCard>
      <LandingCard theme="light">
        <h2>Featured Projects</h2>
        <p>Here are a few projects I&apos;ve worked on that I think are worth looking at. You can find more on the <Link href="/projects">projects</Link> page.</p>
        <CleanImageListing>
          <CleanImageCard
            src="/projects/compstar.png"
            href="https://www.compstar.app"
            title="compstar"
          >
            <p>compstar makes it easier to host beat battles, art fights, and other creative competitions. It handles deadlines, media upload and playback, voting, and gives hosts the tools they need to run a successful event.</p>
            <p>The site is built on Next.js hosted on Vercel and uses various AWS services to work with artist media.</p>
          </CleanImageCard>
          <CleanImageCard
            src="/projects/vocaloidparser.png"
            href="https://github.com/SixBeeps/VOCALOIDParser"
            title="VOCALOIDParser"
          >
            <p>VOCALOIDParser is a .NET library that can read and write VOCALOID5 projects. It also has partial support for VOCALOID6 projects.</p>
            <p>The library is written in C# and is available on <Link href="https://www.nuget.org/packages/VOCALOIDParser" target="_blank">NuGet</Link>.</p>
          </CleanImageCard>
          <CleanImageCard
            src="/projects/grep-health.png"
            href="https://devpost.com/software/grep-health"
            title="grep-health"
          >
            <p>Feeling sick? grep-health gathers information from various trusted medical sources and tells you what to do when you come across unusual symptoms</p>
            <p>Winner of the &quot;Best Use of Google Cloud&quot; prize at HackCWRU 2022 for our proposition of using the Cloud Natural Language API to digest health advice into a readable format.</p>
          </CleanImageCard>
        </CleanImageListing>
      </LandingCard>
      <LandingCard theme="dark">
        <h2>Music</h2>
        <p>As a moderator of the <Link href="https://discord.gg/flstudio">largest FL Studio Discord server</Link>, it shouldn&apos;t be a surprise that I produce in my free time. Here is my most recent release:</p>
        <CleanImageListing>
          <CleanImageCard
            src="/2024collection.jpg"
            size={300}
            title="The 2024 Collection"
          >
            <p><Link href="https://open.spotify.com/album/4FiYaFudvCkL2rvxmwU34I?si=6LOH3zRrQtmT2R-bEG_h_Q">Spotify</Link></p>
            <p><Link href="https://www.youtube.com/playlist?list=OLAK5uy_mucXptLX4BeWockaQTbO9ogQq0Y6iVGs4">YouTube</Link></p>
            <p><Link href="https://music.amazon.com/albums/B0DSJQYC8T">Amazon Music</Link></p>
          </CleanImageCard>
        </CleanImageListing>
      </LandingCard>
      <Footer />
    </>
  )
}
