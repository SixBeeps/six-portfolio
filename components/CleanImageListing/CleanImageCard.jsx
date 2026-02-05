import React from 'react';
import listStyles from './CleanImageListing.module.css';
import Image from "next/image";
import Link from 'next/link';

const CleanImageCard = ({ src, href, size, title, children }) => {
	const imgElement = (
		<Image
            src={src}
            alt={title}
            width={size || 150}
            height={size || 150}
            style={{
                maxWidth: "100%",
                height: "auto"
            }} />
	)

	return (
		<div className={listStyles.card}>
			{href ? (
				<Link href={href} target='_blank'>
					{imgElement}
				</Link>
			) : (
				<>{imgElement}</>
			)}
			<div className={listStyles.content}>
				<h3>
					{href ? (
						<Link href={href} target='_blank'>
							{title}
						</Link>
					) : (
						title
					)}
				</h3>
				{children}
			</div>
		</div>
	);
};

export default CleanImageCard;