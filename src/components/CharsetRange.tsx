import * as React from 'react';
import * as classNames from 'classnames';
import './CharsetRange.css';

export interface Props {
	highlight?: boolean;
}

const CharsetRange: React.StatelessComponent<Props> = ({ highlight, children }) => (
	<div
		className={classNames('CharsetRange', {
			'CharsetRange--highlight-on': highlight === true,
			'CharsetRange--highlight-off': highlight === false,
		})}
	>
		{children}
	</div>
);

export default CharsetRange;
