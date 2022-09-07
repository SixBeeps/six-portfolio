export default function handler(req, res) {
	setTimeout(
		() => {
			res.status(200).json({ status: {
				ppu: 'Online',
				eu: 'Online',
				kdb: 'Online'
			},
		explanation: 'All systems go!' });
		}, 10000 * Math.random() + 1000
	);
  }