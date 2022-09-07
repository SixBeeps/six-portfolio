import React from 'react'
import headerStyles from './HeaderStyle.module.css'
import Hbutton from './Hbutton.jsx'
import Image from 'next/image'

function Header() {
	return (
		<div className={headerStyles.header}>
			<div className={headerStyles.logo}>
				<Image src="/sixbeepslogo.png" layout="fill" objectFit='contain' alt="SixBeeps" />
			</div>
			<Hbutton href="/" value="Home" />
			<Hbutton href="/projects" value="Projects" />
			<Hbutton href="/quick-links" value="Quick Links" />
			<Hbutton href="/about" value="About" />
		</div>
	)
}

export default Header;