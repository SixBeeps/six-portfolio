import React from 'react';
import headerStyles from './HeaderStyle.module.css'
import Link from 'next/link'

class Hbutton extends React.Component {
	render() {
		return (
			<Link href={this.props.href}>
				<div className={headerStyles.headerButton}>
					<span>{this.props.value}</span>
				</div>
			</Link>
		)
	}
}

export default Hbutton;