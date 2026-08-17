import React from 'react'
import styles from './Common.module.css'

class Button extends React.Component {
	render() {
		return (
			<div className={`${styles.button}`}>
				{this.props.children}
			</div>
		)
	}
}

export default Button;