import * as React from 'react';
import CharsetCell from './CharsetCell';
import './CharsetRow.css';

export interface Props {
	offset: number;
}

const CharsetRow: React.StatelessComponent<Props> = ({ offset }) => {
	const cols: React.ReactChild[] = [];
	for (let x = 0x00; x < 0x10; x++) {
		const charCode = offset + x;
		cols.push(
			<CharsetCell charCode={charCode} key={charCode} />
		);
	}
	return (
		<div className="CharsetRow">
			{cols}
		</div>
	);
};

export default CharsetRow;
