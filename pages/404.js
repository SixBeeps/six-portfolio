import Head from 'next/head'
import Image from "next/legacy/image"
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/HeaderStuff/Header.jsx'
import Footer from '../components/FooterStuff/Footer.jsx'
import GridPatternBackground from '../components/GridPatternBackground/GridPatternBackground.jsx'

export default function Home() {
  return (
    <div className='expandpage'>
      <Header />
      <div className="main-content">
        <GridPatternBackground pattern={{
          "Hat": "01010101",
          "Snare": "00100010",
          "Kick": "10101010",
        }} bpm={128 * 2} />
        <h1>How&apos;d you end up here?</h1>
        <h2>There&apos;s nothing but the void.</h2>
        <h3>You&apos;ve probably been lost. Now head back <Link href="/">home</Link>, little one.</h3>
      </div>
      <Footer />
    </div>
  )
}
