import React from 'react'
import cardStyles from './LandingCardStyle.module.css'

class LandingCard extends React.Component {
	render() {
		return (
			<div className={`${cardStyles.card} ${this.props.theme == "dark" ? cardStyles.dark : cardStyles.light}`}>
				{this.props.children}
			</div>
		)
	}
}

export default LandingCard;