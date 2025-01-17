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
      <h2>Full-fleged Applications</h2>
      <ImageListing>
        <ImageCard src="/projects/vocaloidparser.png" size="128" title="VOCALOIDParser" interactable>
          <Link href="https://github.com/SixBeeps/VOCALOIDParser">Visit GitHub Repo</Link><br />
          <i>Library for parsing VOCALOID projects</i>
        </ImageCard>
        <ImageCard src="/projects/grep-health.png" size="128" title="grep-health" interactable>
          <Link href="https://devpost.com/software/grep-health">Visit Devpost Submission</Link><br />
          <i>Digests health advice into a readable format</i>
        </ImageCard>
        <ImageCard src="/projects/whisker.png" size="128" title="Whisker" interactable>
          <Link href="https://relay-jam-3.epicgamer007.repl.co/">Visit website</Link><br />
          <i>Simple music sequencing tool</i>
        </ImageCard>
        <ImageCard src="/projects/cyan.png" size="128" title="Project Cyan" interactable>
          <Link href="https://csds-393-chisel-cyan.vercel.app">Visit website</Link><br />
          <i>Plan courses based on schedule and reviews</i>
        </ImageCard>
      </ImageListing>
      <h2>Smaller Web Toys</h2>
      <ImageListing>
        <ImageCard src="/projects/query.png" size="96" title="Query" interactable>
          <Link href="https://query.sixbeeps.com">Visit website</Link><br />
          <i>Interactive version of my song &apos;Query&apos;</i>
        </ImageCard>
        <ImageCard src="/projects/ideas.png" size="96" title="Ideas Generator" interactable>
          <Link href="https://ideas.sixbeeps.com">Visit website</Link><br />
          <i>Ideas generator that gives you words to work with</i>
        </ImageCard>
        <ImageCard src="/projects/rtposterator.png" size="96" title="Repl Talk Posterator" interactable>
          <Link href="https://rtposterator.sixbeeps.com">Visit website</Link><br />
          <i>Markov-based model for generating fake Repl Talk posts</i>
        </ImageCard>
        <ImageCard src="/projects/twrb.png" size="96" title="The Work-Rest Balance" interactable>
          <Link href="https://twrb.sixbeeps.com">Visit website</Link><br />
          <i>Small Twine story based on Space Station 13</i>
        </ImageCard>
        <ImageCard src="/projects/cubegame.png" size="96" title="Cube Game Online" interactable>
          <Link href="https://cubegame.sixbeeps.com">Visit website</Link><br />
          <i>Really simple &quot;game&quot; using Socket.io</i>
        </ImageCard>
        <ImageCard src="/projects/couldve.png" size="96" title="could&apos;ve" interactable>
          <Link href="https://couldve.sixbeeps.com">Visit website</Link><br />
          <i>What you could&apos;ve done with your life</i>
        </ImageCard>
      </ImageListing>
      <Footer />
    </div>
  )
}
