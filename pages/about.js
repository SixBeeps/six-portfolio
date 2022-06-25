import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Header from '../components/HeaderStuff/Header.jsx'
import Footer from '../components/FooterStuff/Footer.jsx'
import LandingCard from '../components/LandingCard/LandingCard.jsx'

export default function Home() {
  return (
    <div className='expandpage'>
      <Header />
      <LandingCard theme="dark">
        <h1>About Me</h1>
        <p>If you couldn&apos;t tell by my homepage already, my name&apos;s Brandon Lee (a.k.a SixBeeps here on the internet) and I&apos;m a full-stack developer. I also do a lot of music stuff in my free time, both on the computer and in real life (violist + mild pianist). I&apos;m currently working my way towards a B.S. in Computer Science from Case Western Reserve University, expecting to graduate spring of 2024.</p>
      </LandingCard>
      <Footer />
    </div>
  )
}
