import * as React from 'react';
import CharsetRangeNonPrintable from '../containers/CharsetRangeNonPrintable';
import CharsetRangePrintable from '../containers/CharsetRangePrintable';
import './Charset.css';

const Charset: React.StatelessComponent = () => (
	<div className="Charset">
		<CharsetRangeNonPrintable />
		<CharsetRangePrintable />
	</div>
);

export default Charset;
