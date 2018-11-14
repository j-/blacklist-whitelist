import * as React from 'react';
import './CharReal.css';

export interface Props {
	children: number;
}

const CharReal: React.StatelessComponent<Props> = ({ children }) => (
	<span className="CharReal">
		{String.fromCharCode(children)}
	</span>
);

export default CharReal;
