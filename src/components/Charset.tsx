import * as React from 'react';
import Char from '../containers/Char';
import './Charset.css';

const CHAR_ROWS = 0x8;
const CHAR_COLS = 0x10;

const Charset: React.StatelessComponent = () => {
	const rows: React.ReactChild[] = [];
	for (let y = 0; y < CHAR_ROWS; y++) {
		const cols: React.ReactChild[] = [];
		for (let x = 0; x < CHAR_COLS; x++) {
			const charCode = y * CHAR_COLS + x;
			cols.push(
				<div className="Charset-cell" key={charCode}>
					<Char charCode={charCode} />
				</div>
			);
		}
		rows.push(
			<div className="Charset-row" key={y}>
				{cols}
			</div>
		);
	}
	return (
		<div className="Charset">
			{rows}
		</div>
	);
};

export default Charset;
