import * as React from 'react';
import * as classNames from 'classnames';
import { charCodeSummary } from '../char';
import CharInner from './CharInner';
import './TestGrid.css';

export interface Props {
	expr?: RegExp | null;
}

const TestGrid: React.StatelessComponent<Props> = ({ expr }) => {
	const children: React.ReactChild[] = [];
	for (let charCode = 0x00; charCode < 0x80; charCode++) {
		const matches = expr && expr.test(String.fromCharCode(charCode));
		const className = classNames('TestGrid-char', {
			'TestGrid-char--matches': matches,
		});
		children.push(
			<div className={className} key={charCode} title={charCodeSummary(charCode)}>
				<CharInner>{charCode}</CharInner>
			</div>
		);
	}
	return (
		<div className="TestGrid">
			{children}
		</div>
	);
};

export default TestGrid;
