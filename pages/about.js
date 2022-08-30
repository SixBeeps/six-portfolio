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
      <h1>About Me</h1>
      <article className="main-content">
        <p>If you couldn&apos;t tell by my homepage already, my name&apos;s Brandon Lee (a.k.a SixBeeps here on the internet) and I&apos;m a full-stack developer. I also do a lot of music stuff in my free time, both on the computer and in real life (violist + mild pianist). I&apos;m currently working my way towards a B.S. in Computer Science from Case Western Reserve University, expecting to graduate spring of 2024.</p>
        <p>I started coding at the ripe age of 12, I can&apos;t recall which of the languages I learned at the time came first, though I took to using SmileBasic, UnityScript with Unity, and some VBS stuff. Most of my coding knowledge nowadays comes from things I&apos;ve learned in my free time, but I started taking my interest in programming seriously when I joined Game-U back in 2014.</p>
        <p>In terms of prior work experience, I've worked a few code-related jobs, including at <a href="https://replit.com/">Replit</a> as a video content creator. Outside of computers, I have also worked at Giant Eagle as both a cashier and the "assistant to the assistant to the manager" of the attached GetGo location; both positions I was very fond of (never forget Store #3527, you will be missed).</p>
      </article>
      <Footer />
    </div>
  )
}
