import React from 'react'
import footerStyles from './FooterStyle.module.css'

function Footer() {
	let year = (new Date()).getUTCFullYear();
	return (
		<div className={footerStyles.footer}>
			Copyright &copy; Brandon Lee / SixBeeps {year}
		</div>
	)
}

export default Footer;