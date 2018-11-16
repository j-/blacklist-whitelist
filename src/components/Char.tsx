import * as React from 'react';
import { charCodeToExp } from '../char';
import CharInner from './CharInner';
import './Char.css';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	charCode: number;
}

const Char: React.StatelessComponent<Props> = ({ charCode, ...props }) => {
	const id = `Char-id-${charCode}`;
	return (
		<div className="Char" title={charCodeToExp(charCode)}>
			<input className="Char-check visually-hidden" id={id} type="checkbox" {...props} />
			<label className="Char-label" htmlFor={id}>
				<CharInner>{charCode}</CharInner>
			</label>
		</div>
	);
};

export default Char;
