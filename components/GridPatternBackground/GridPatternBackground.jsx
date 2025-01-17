import React, { useState, useEffect, useRef } from 'react'
import gridStyles from './GridPatternBackground.module.css'

const GridPatternBackground = ({ pattern, bpm }) => {
	const [beat, setBeat] = useState(0);
	const patternLength = pattern[Object.keys(pattern)[0]].length;
	const cellWidthPercent = 100 / patternLength;
	useEffect(() => {
		const interval = setInterval(() => {
			setBeat((beat + 1) % patternLength);
		}, 60000 / bpm);
		return () => clearInterval(interval);
	});

	return (
		<div
			className={gridStyles.grid}
			style={{
				gridTemplateColumns: `repeat(${pattern[Object.keys(pattern)[0]].length}, ${cellWidthPercent}%)`,
			}}
		>
			{Object.keys(pattern).map((instrument) => (
				[...pattern[instrument]].map((cell, t) => (
					<div
						key={instrument + t}
						className={gridStyles.cell}
						style={{
							backgroundColor: cell === "1" ? (
								t === beat ? "var(--mid)" : "var(--dark)"
							) : "transparent"
						}}
					/>
				))
			))}
		</div>
	)
}

export default GridPatternBackground;