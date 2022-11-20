import Header from '../components/HeaderStuff/Header.jsx'
import Footer from '../components/FooterStuff/Footer.jsx'
import {useEffect, useState} from 'react'

export default function Deactivated() {
  const [status, setStatus] = useState({
	ppu: 'Fetching...',
	eu: 'Fetching...',
	kdb: 'Fetching...'
  });

  const [explanation, setExplanation] = useState('Please wait while we fetch the status. This process may take up to 15 seconds to complete.');

  useEffect(() => {
	fetch('/api/status')
	  .then(res => res.json())
	  .then(data => {
		setStatus(data.status);
		setExplanation(data.explanation);
	  })
	  .catch(err => {
		setStatus({
			ppu: 'Unavailable',
			eu: 'Unavailable',
			kdb: 'Unavailable'
		});
		setExplanation('The server returned an error. Please try again later.');
	  });
  }, []);

  return (
	<div className='expandpage'>
		<Header />
		<article className='main-content'>
			<h1>SixBeeps Status Dashboard</h1>
			<table>
				<thead>
					<tr>
						<th style={{textAlign: 'right'}}>Service</th>
						<th style={{textAlign: 'left'}}>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={{textAlign: 'right'}}>PPU</td>
						<td>{status.ppu}</td>
					</tr>
					<tr>
						<td style={{textAlign: 'right'}}>EU</td>
						<td>{status.eu}</td>
					</tr>
					<tr>
						<td style={{textAlign: 'right'}}>KDB</td>
						<td>{status.kdb}</td>
					</tr>
				</tbody>
			</table>
			<p>{explanation}</p>
		</article>
	  <Footer />
	</div>
  )
}