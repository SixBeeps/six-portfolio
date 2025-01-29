import Header from '../components/HeaderStuff/Header.jsx'
import CleanImageListing from '../components/CleanImageListing/CleanImageListing'
import CleanImageCard from '../components/CleanImageListing/CleanImageCard'
import Link from 'next/link'
import Footer from '../components/FooterStuff/Footer'
import LandingPageCard from '../components/LandingCard/LandingCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='expandpage'>
      <Header />
      <LandingPageCard theme="dark">
        <h2>My projects</h2>
        <p>Here are some full-scale projects that I try to maintain every once in a while</p>
        <CleanImageListing>
            <CleanImageCard
              src="/projects/compstar.png"
              href="https://www.compstar.app"
              title="compstar"
              size={100}
            >
              <p>Site for hosting creative competitions</p>
            </CleanImageCard>
            <CleanImageCard
              src="/projects/vocaloidparser.png"
              href="https://github.com/SixBeeps/VOCALOIDParser"
              title="VOCALOIDParser"
              size={100}
            >
              <p>Get the <Link href="https://www.nuget.org/packages/VOCALOIDParser" target="_blank">NuGet package</Link></p>
              <p>.NET library for working with VOCALOID5 projects</p>
            </CleanImageCard>
            <CleanImageCard
              src="/projects/lqw.png"
              href="https://discord.com/api/oauth2/authorize?client_id=1197255386470826174&permissions=2147560448&scope=applications.commands+bot"
              title="LQWBot"
              size={100}
            >
              <p>Discord bot for tracking what users think of one another</p>
            </CleanImageCard>
          </CleanImageListing>
          <br />
          <p>and here are some projects that I have worked on in the past</p>
          <CleanImageListing>
            <CleanImageCard
              src="/projects/grep-health.png"
              href="https://devpost.com/software/grep-health"
              title="grep-health"
              size={100}
            >
              <p>Site for understanding and learning about medical symptoms</p>
            </CleanImageCard>
            <CleanImageCard
              src="/projects/sixswatch.png"
              href="https://sixswatch.vercel.app/"
              title="sixswatch"
              size={100}
            >
              <p>Site for creating and storing color palettes</p>
            </CleanImageCard>
            <CleanImageCard
              src="/projects/mixxx.png"
              href="https://gist.github.com/SixBeeps/1632ae049c93f34ddf0feec4c673066f"
              title="Mixxx Scrobbler"
              size={100}
            >
              <p>Script for scrobbling Mixxx .cue files</p>
            </CleanImageCard>
            <CleanImageCard
              src="/projects/cyan.png"
              href="https://csds-393-chisel-cyan.vercel.app/"
              title="Project Cyan"
              size={100}
            >
              <p>Site for planning coursework based on schedule and reviews</p>
            </CleanImageCard>
          </CleanImageListing>
      </LandingPageCard>
      <Footer />
    </div>
  )
}
