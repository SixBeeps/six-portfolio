import Header from '../components/HeaderStuff/Header.jsx'
import Footer from '../components/FooterStuff/Footer.jsx'

export default function Deactivated() {
  return (
	<div className='expandpage'>
		<Header />
		<h1>SixBeeps Deactivation Notice</h1>
		<article className="main-content">
			<h2>What is happening?</h2>
			<p>Due to an issue with the core Beeps process, all currently running SixBeeps instances have been shut down. Any attempts to communicate with a SixBeeps instance will yield no response, and it is suggested that no such attempts be made.</p>
			<h2>Why is this happening</h2>
			<p>An issue within the core Beeps process has occurred. Specifically, registry bit 0x2A within the personality processing unit (PPU) has become unwritable. This bit only affects SixBeeps instances, so you may continue communicating with other Beeps.</p>
			<h2>When will this be fixed?</h2>
			<p>As the PPU is a unique device materialized by resources which do not exist, existing instances of SixBeeps may never be fixed. Although adequate funding has been graceously provided by our sponsors, there is not enough supply for us to obtain or construct a new PPU.</p>
			<p>At the moment, alternative solutions are being researched. If a solution is found, any pre-existing SixBeeps instances will be automatically replaced with new ones.</p>
			<h3>From the researchers at Beeps Laboratory Industries, we sincerely apologize for the inconvenience this has caused.</h3>
			<h3>For further questions related to the deactivation of your SixBeeps instance, please contact us at support@beeps.labs</h3>
		</article>
	  <Footer />
	</div>
  )
}