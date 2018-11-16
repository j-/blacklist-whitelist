import * as React from 'react';
import { hasSymbol, getSymbol } from '../char';
import './CharSymbol.css';

export interface Props {
	children: number;
}

const CharSymbol: React.StatelessComponent<Props> = ({ children: charCode }) => (
	hasSymbol(charCode) ?
		// Code point has a corresponding symbol
		<span className="CharSymbol">
			{getSymbol(charCode)}
		</span> :
		// Do not render anything otherwise
		null
);

export default CharSymbol;
