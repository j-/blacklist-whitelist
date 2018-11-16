import * as React from 'react';
import Char from '../containers/Char';
import './CharsetCell.css';

export interface Props {
	charCode: number;
}

const CharsetCell: React.StatelessComponent<Props> = ({ charCode }) => (
	<div className="CharsetCell">
		<Char charCode={charCode} />
	</div>
);

export default CharsetCell;
