import * as React from 'react';
import './CharReal.css';

export interface Props {
	children: number;
}

const CharReal: React.StatelessComponent<Props> = ({ children: charCode }) => (
	<span className="CharReal">
		{String.fromCharCode(charCode)}
	</span>
);

export default CharReal;
