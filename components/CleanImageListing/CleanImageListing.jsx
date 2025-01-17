import React from 'react';
import CleanImageCard from './CleanImageCard.jsx'
import listStyles from './CleanImageListing.module.css'

const CleanImageListing = ({ children }) => {
	return (
		<div className={listStyles.list}>
			{children}
		</div>
	)
}

export default CleanImageListing;