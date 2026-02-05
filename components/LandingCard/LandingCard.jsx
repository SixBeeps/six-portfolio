import React from 'react'
import cardStyles from './LandingCardStyle.module.css'

const themeMap = {
	dark: cardStyles.dark,
	light: cardStyles.light,
	pitch: cardStyles.pitch
}

class LandingCard extends React.Component {
	render() {
		return (
			<div className={`${cardStyles.card} ${themeMap[this.props.theme || 'light']}`}>
				<div className={cardStyles.content}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default LandingCard;