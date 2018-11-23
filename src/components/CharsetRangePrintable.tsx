import * as React from 'react';
import CharsetRow from './CharsetRow';
import CharsetRange from './CharsetRange';
import './Charset.css';

export interface Props {
	highlight?: boolean;
}

const CharsetRangePrintable: React.StatelessComponent<Props> = ({
	highlight,
}) => {
	const rows: React.ReactChild[] = [];
	for (let y = 2; y < 8; y++) {
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

export default CharsetRangePrintable;
