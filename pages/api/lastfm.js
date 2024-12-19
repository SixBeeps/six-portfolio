const apiKey = process.env.LASTFM_API_KEY
const user = "sixbeeps"
const baseUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=12`
const scrobbleUrl = (songName, songArtist) => `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&user=${user}&track=${encodeURIComponent(songName)}&artist=${encodeURIComponent(songArtist)}&api_key=${apiKey}&format=json`

export default async function handler(req, res) {
	const base = await (await fetch(baseUrl)).json()
	if (base.recenttracks === undefined) return res.status(500).json({ error: "No recent tracks" })
	const scrobbles = await (await fetch(scrobbleUrl(base.recenttracks.track[0].name, base.recenttracks.track[0].artist["#text"]))).json();
	res.status(200).json({
		base: base.recenttracks.track[0],
		others: base.recenttracks.track.slice(1),
		scrobbles: scrobbles.track.userplaycount
	})
}