import React from 'react';
import listStyles from './ImageListing.module.css'
import Image from 'next/image'

class ImageCard extends React.Component {
	render() {
		return (
			<div className={listStyles.card}>
				<Image src={this.props.src} width={this.props.size} height={this.props.size} objectFit="cover" />
				<div className={listStyles.contents}>
					<h3 className={listStyles.title}>{this.props.title}</h3>
					<span className={listStyles.text}>
						{this.props.children}
					</span>
				</div>
			</div>
		)
	}
}

export default ImageCard;