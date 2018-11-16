import * as React from 'react';
import Charset from './Charset';
import ToggleNonPrintable from '../containers/ToggleNonPrintable';
import TogglePrintable from '../containers/TogglePrintable';
import Blacklist from '../containers/Blacklist';
import Whitelist from '../containers/Whitelist';

const App: React.StatelessComponent = () => (
	<div className="App container mt-5 mb-5">
		<h1 className="mb-5">Blacklist / Whitelist</h1>

		<section className="mb-5">
			<Charset />
		</section>

		<section className="mb-5">
			<ToggleNonPrintable className="btn btn-light">Toggle non-printable</ToggleNonPrintable>
			&nbsp;
			<TogglePrintable className="btn btn-light">Toggle printable</TogglePrintable>
		</section>

		<section className="mb-5">
			<h2 className="mb-3">
				<label htmlFor="App-blacklist">Blacklist</label>
			</h2>
			<Blacklist id="App-blacklist" className="form-control text-monospace" />
		</section>

		<section className="mb-5">
			<h2 className="mb-3">
				<label htmlFor="App-whitelist">Whitelist</label>
			</h2>
			<Whitelist id="App-whitelist" className="form-control text-monospace" />
		</section>
	</div>
);

export default App;
