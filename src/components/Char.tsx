import * as React from 'react';
import './Char.css';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	charCode: number;
}

const Char: React.StatelessComponent<Props> = ({ charCode, ...props }) => {
	const id = `Char-id-${charCode}`;
	return (
		<div className="Char">
			<input className="Char-check visually-hidden" id={id} type="checkbox" {...props} />
			<label className="Char-label" htmlFor={id}>
				{String.fromCharCode(charCode)}
			</label>
		</div>
	);
};

export default Char;
