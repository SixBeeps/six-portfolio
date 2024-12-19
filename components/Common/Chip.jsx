import React from 'react'
import styles from './Common.module.css'

class Chip extends React.Component {
	render() {
		return (
			<div className={`${styles.chip} ${this.props.theme == "dark" ? styles.dark : styles.light}`}>
				{this.props.children}
			</div>
		)
	}
}

export default Chip;