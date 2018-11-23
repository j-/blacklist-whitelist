import * as React from 'react';
import { hasSymbol, getSymbol } from '../char';
import './CharInnerSymbol.css';

export interface Props {
	children: number;
}

const CharInnerSymbol: React.StatelessComponent<Props> = ({
	children: charCode,
}) => (
	hasSymbol(charCode) ?
		// Code point has a corresponding symbol
		<span className="CharInnerSymbol">
			{getSymbol(charCode)}
		</span> :
		// Do not render anything otherwise
		null
);

export default CharInnerSymbol;
