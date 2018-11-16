import * as React from 'react';
import CharsetRow from './CharsetRow';
import CharsetRange from './CharsetRange';
import './Charset.css';

export interface Props {
	highlight?: boolean;
}

const CharsetRangeNonPrintable: React.StatelessComponent<Props> = ({ highlight }) => {
	const rows: React.ReactChild[] = [];
	for (let y = 0; y < 2; y++) {
		rows.push(
			<CharsetRow offset={y * 0x10} key={y} />
		);
	}
	return (
		<CharsetRange highlight={highlight}>
			{rows}
		</CharsetRange>
	);
};

export default CharsetRangeNonPrintable;
