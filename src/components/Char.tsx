import * as React from 'react';
import { SYMBOLS, charCodeToExp } from '../char';
import './Char.css';
import CharSymbol from './CharSymbol';
import CharReal from './CharReal';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	charCode: number;
}

const Char: React.StatelessComponent<Props> = ({ charCode, ...props }) => {
	const id = `Char-id-${charCode}`;
	return (
		<div className="Char" title={charCodeToExp(charCode)}>
			<input className="Char-check visually-hidden" id={id} type="checkbox" {...props} />
			<label className="Char-label" htmlFor={id}>
				{
					charCode in SYMBOLS ?
						<CharSymbol>{charCode}</CharSymbol> :
						<CharReal>{charCode}</CharReal>
				}
			</label>
		</div>
	);
};

export default Char;
