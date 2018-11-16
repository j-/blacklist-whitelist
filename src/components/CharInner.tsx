import * as React from 'react';
import { hasSymbol } from '../char';
import CharInnerSymbol from './CharInnerSymbol';
import CharInnerReal from './CharInnerReal';

export interface Props {
	children: number;
}

const CharInner: React.StatelessComponent<Props> = ({ children: charCode }) => (
	hasSymbol(charCode) ?
		<CharInnerSymbol>{charCode}</CharInnerSymbol> :
		<CharInnerReal>{charCode}</CharInnerReal>
);

export default CharInner;
