import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/HeaderStuff/Header.jsx'
import Footer from '../components/FooterStuff/Footer.jsx'
import LandingCard from '../components/LandingCard/LandingCard.jsx'
import ImageListing from '../components/ImageListing/ImageListing.jsx'
import ImageCard from '../components/ImageListing/ImageCard.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <LandingCard theme="dark">
        <h1>Hellooooooo.</h1>
        <h2>I&apos;m SixBeeps</h2>
        <h2>🚧 Careful, this site is still being developed! 🚧</h2>
      </LandingCard>
      <LandingCard theme="light">
        <h1>Who am I?</h1>
        <ul className="centerme">
          <li>I&apos;m a full-stack developer</li>
          <li>I&apos;m a drum &amp; bass producer</li>
          <li>I&apos;m a pure-bred Ohioan</li>
          <li>I&apos;m a student at Case Western Reserve University</li>
          <li>I&apos;m a video creator (sometimes)</li>
        </ul>
      </LandingCard>
      <LandingCard theme="dark">
        <h1>What are my tools?</h1>
        <ImageListing>
          <ImageCard src="/tools/vsc.png" size="64" title="Visual Studio (Code)">
            <i>for local code editing</i>
          </ImageCard>
          <ImageCard src="/tools/replit.png" size="64" title="Replit">
            <i>for online code editing</i>
          </ImageCard>
          <ImageCard src="/tools/flstudio.png" size="64" title="FL Studio">
            <i>for music editing</i>
          </ImageCard>
          <ImageCard src="/tools/vegas.png" size="64" title="Vegas Pro 15.0">
            <i>for video editing</i>
          </ImageCard>
          <ImageCard src="/tools/linuxmint.png" size="64" title="Linux Mint">
            <i>for when Windows isn&apos;t enough</i>
          </ImageCard>
        </ImageListing>
      </LandingCard>
      <Footer />
    </>
  )
}
