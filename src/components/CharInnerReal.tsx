import * as React from 'react';
import './CharInnerReal.css';

export interface Props {
	children: number;
}

const CharInnerReal: React.StatelessComponent<Props> = ({
	children: charCode,
}) => (
	<span className="CharInnerReal">
		{String.fromCharCode(charCode)}
	</span>
);

export default CharInnerReal;
