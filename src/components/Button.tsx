import * as React from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.StatelessComponent<Props> = (props) => (
	<button {...props} />
);

export default Button;
