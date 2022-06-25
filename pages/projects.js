import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/HeaderStuff/Header.jsx'
import ImageListing from '../components/ImageListing/ImageListing'
import ImageCard from '../components/ImageListing/ImageCard'
import Link from 'next/link'
import Footer from '../components/FooterStuff/Footer'

export default function Home() {
  return (
    <div className='expandpage'>
      <Header />
      <h1>Projects</h1>
      <ImageListing>
        <ImageCard src="/projects/vocaloidparser.png" size="96" title="VOCALOIDParser">
          <Link href="https://github.com/SixBeeps/VOCALOIDParser">Visit GitHub Repo</Link><br />
          <i>Library for parsing VOCALOID projects</i>
        </ImageCard>
        <ImageCard src="/projects/grep-health.png" size="96" title="grep-health">
          <Link href="https://devpost.com/software/grep-health">Visit Devpost Submission</Link><br />
          <i>Digests health advice into a readable format</i>
        </ImageCard>
        <ImageCard src="/projects/whisker.png" size="96" title="Whisker">
          <Link href="https://relay-jam-3.epicgamer007.repl.co/">Visit website</Link><br />
          <i>Simple music sequencing tool</i>
        </ImageCard>
      </ImageListing>
      <Footer />
    </div>
  )
}
