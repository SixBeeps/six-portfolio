import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/HeaderStuff/Header.jsx'
import Footer from '../components/FooterStuff/Footer.jsx'

export default function MyPage() {
  return (
    <div className='expandpage'>
      <Header />
      {/* Content goes here */}
      <Footer />
    </div>
  )
}
