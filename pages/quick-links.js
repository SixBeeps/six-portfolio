import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/HeaderStuff/Header.jsx'
import Footer from '../components/FooterStuff/Footer.jsx'
import Link from 'next/link'

export default function Home() {
  let links = [
    {url: "https://faq.sixbeeps.repl.co/", text: "Shoddily made Replit FAQ"},
	{url: "http://cover.musicradar.com/DnBWeekend/DnB%20All-Stars%20-%20VIP%20Series%20Sample%20Pack%20-%20Computer%20Music%20magazine.zip", text: "Drum & Bass sample pack (very nice)"},
	{url: "https://theshadedstudio.wixsite.com/website", text: "Please take a look"},
	{url: "https://sddtguidelines.sixbeeps.repl.co/", text: "Six's Dark Theme Thingy"}
  ]

  return (
    <div className='expandpage'>
      <Header />
      <h1>Quick Links</h1>
      <ul className="centerme">
        { links.map(function(item, index) {
          return <li key={index}><Link href={item.url}>{item.text}</Link></li>
        }) }
      </ul>
      <Footer />
    </div>
  )
}
