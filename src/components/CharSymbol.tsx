import * as React from 'react';
import { SYMBOLS } from '../char';
import './CharSymbol.css';

export interface Props {
	children: number;
}

const CharSymbol: React.StatelessComponent<Props> = ({ children }) => (
	children in SYMBOLS ?
		// Code point has a corresponding symbol
		<span className="CharSymbol">
			{SYMBOLS[children]}
		</span> :
		// Do not render anything otherwise
		null
);

export default CharSymbol;
