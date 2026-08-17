import Head from 'next/head'
import Image from "next/image"
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Header from '../../components/HeaderStuff/Header.jsx'
import Footer from '../../components/FooterStuff/Footer.jsx'
import Button from '../../components/Common/Button.jsx'
import { ArrowRight } from 'iconoir-react'

export default function MyPage() {
  return (
    <div className='expandpage'>
      <Header />
			<div className="centerme">
				<Image
					src="/projects/lqw.png"
					width={256}
					height={256}
					alt="Logo"
				/>
			</div>
			<h2>LQWBot</h2>
			<div className="centerme">
				<Link href="https://discord.com/api/oauth2/authorize?client_id=1197255386470826174&permissions=2147560448&scope=applications.commands+bot">
					<Button>
						Add to server <ArrowRight />
					</Button>
				</Link>
			</div>
			<div className='centerme'>
				<span>
					<Link href="/lqw/terms">Terms</Link>
					&nbsp;–&nbsp;
					<Link href="/lqw/privacy">Privacy</Link>
				</span>
			</div>
	    <Footer />
    </div>
  )
}

// https://discord.com/api/oauth2/authorize?client_id=1197255386470826174&permissions=2147560448&scope=applications.commands+bot
