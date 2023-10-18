export default async function handler(req, res) {
	return new Promise(resolve => {
		setTimeout(
			() => {
				res.status(200).json({
					status: {
						ppu: 'Online',
						eu: 'Online',
						kdb: 'Online'
					},
					explanation: 'All systems go!'
				});
				resolve();
			}, 10000 * Math.random() + 1000
		);	
	})
  }