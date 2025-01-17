import { useState, useEffect } from "react";
import ImageCard from "../components/ImageListing/ImageCard";
import ImageListing from "../components/ImageListing/ImageListing";
import Header from "../components/HeaderStuff/Header";
import Chip from "../components/Common/Chip"
import Throbber from "../components/Throbber/Throbber";
import LandingCard from "../components/LandingCard/LandingCard";

const fallbackArt = "https://lastfm.freetls.fastly.net/i/u/300x300/c6f59c1e5e7240a4c0d427abd71f3dbb.jpg";

export default function Home() {	
	const [nowPlaying, setNowPlaying] = useState(undefined);
	const [err, setErr] = useState(undefined);
	
	useEffect(() => {
		const interval = setInterval(() => {
			fetch("/api/lastfm")
				.then(res => res.json())
				.then(data => {
					setNowPlaying(data);
					setErr(undefined);
				})
				.catch(setErr);
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<Header />
			<LandingCard theme="dark">
				<h2>Status</h2>
				{ err ? (
					<h3>Failed to fetch data from Last.fm</h3>
				)
				: !nowPlaying ? (
					<>
						<h3>Asking Six what he&apos;s doing...</h3>
						<Throbber />
					</>
				) : (
					<>
						<h3>{nowPlaying["@attr"] ? "Currently listening to:" : "Was listening to:"}</h3>
						<ImageListing>
							<ImageCard src={nowPlaying.base?.image?.[3]["#text"] || fallbackArt} size="256" title={<>
								<a href={nowPlaying.base.url} target="_blank" rel="noreferrer">{nowPlaying.base.name}</a>&nbsp;
								<Chip theme="light">{nowPlaying.scrobbles} scrobble{nowPlaying.scrobbles == 1 ? '' : 's'}</Chip>
							</>}>
								<i>{nowPlaying.base.artist["#text"]}</i>
							</ImageCard>
						</ImageListing>
						<h3>Previously listened to:</h3>
						<ImageListing>
							{nowPlaying.others.map((track, i) => (
								<ImageCard key={i} src={track.image?.[3]["#text"] || fallbackArt} size={64} title={<a href={track.url} target="_blank" rel="noreferrer">{track.name}</a>}>
									<i>{track.artist["#text"]}</i>
								</ImageCard>
							))}
						</ImageListing>
					</>
				)}
			</LandingCard>
		</div>
	);
}