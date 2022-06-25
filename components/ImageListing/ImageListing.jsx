import React from 'react';
import listStyles from './ImageListing.module.css'
import ImageCard from './ImageCard.jsx'

class ImageListing extends React.Component {
	render() {
		return (
			<div className={listStyles.list}>
				{this.props.children}
			</div>
		)
	}
}

export default ImageListing;