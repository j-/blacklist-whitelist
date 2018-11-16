import * as React from 'react';
import Charset from './Charset';
import ToggleNonPrintable from '../containers/ToggleNonPrintable';
import TogglePrintable from '../containers/TogglePrintable';
import Blacklist from '../containers/Blacklist';
import Whitelist from '../containers/Whitelist';
import './App.css';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Charset />

		<br />

		<div className="App-actions">
			<ToggleNonPrintable>Toggle non-printable characters</ToggleNonPrintable>
			<br />
			<TogglePrintable>Toggle printable characters</TogglePrintable>
		</div>

		<div className="App-blacklist-container">
			<label htmlFor="App-blacklist">Blacklist</label><br />
			<Blacklist id="App-blacklist" className="App-expression-output" />
		</div>

		<div className="App-whitelist-container">
			<label htmlFor="App-whitelist">Whitelist</label><br />
			<Whitelist id="App-whitelist" className="App-expression-output" />
		</div>
	</div>
);

export default App;
