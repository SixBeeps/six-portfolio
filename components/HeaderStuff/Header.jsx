import React from 'react'
import headerStyles from './HeaderStyle.module.css'
import Hbutton from './Hbutton.jsx'
import Image from 'next/image'
import Link from 'next/link'
import { GithubCircle } from 'iconoir-react'

function Header() {
	return (
		<div className={headerStyles.header}>
			<div className={headerStyles.logo}>
				<Image src="/sixbeepslogo.png" layout="fill" objectFit='contain' alt="SixBeeps" />
			</div>
			<Hbutton href="/" value="Home" />
			<Hbutton href="/projects" value="Projects" />
			<Hbutton href="/status" value="Status" />
			{/* <Hbutton href="/about" value="About" /> */}
			<Link href="https://github.com/SixBeeps/six-portfolio" target='_blank' rel='noopener noreferrer' className={headerStyles.headerLink}>
				<GithubCircle className={headerStyles.headerLinkIcon} />
				View on GitHub
			</Link>
		</div>
	)
}

export default Header;