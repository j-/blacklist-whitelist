import * as React from 'react';
import * as classNames from 'classnames';
import TestGrid from './TestGrid';
import TestExprFeedback from './TestExprFeedback';

export interface Props {

}

interface State {
	source: string;
	expr: RegExp | null;
	error: Error | null;
}

const DEFAULT_EXPR_SOURCE = '[<>]';
const DEFAULT_EXPR = new RegExp(DEFAULT_EXPR_SOURCE);

export default class TestExpr extends React.Component<Props, State> {
	state: State = {
		source: DEFAULT_EXPR_SOURCE,
		expr: DEFAULT_EXPR,
		error: null,
	};

	render () {
		const { source, expr, error } = this.state;
		const inputClassName = classNames(
			'form-control text-monospace',
			error && 'is-invalid',
		);
		return (
			<div className="TestExpr">
				<h2 className="mb-3">
					<label htmlFor="TestExpr-source">Test expression</label>
				</h2>
				<input
					id="TestExpr-source"
					className={inputClassName}
					type="text"
					value={source}
					onChange={this.handleSourceChange}
				/>
				<TestExprFeedback error={error} />
				<div className="mt-3">
					<TestGrid expr={expr} />
				</div>
			</div>
		);
	}

	private handleSourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const source = e.currentTarget.value;
		let expr: RegExp | null = null;
		let error: Error | null = null;
		try {
			expr = new RegExp(source);
		} catch (err) {
			error = err;
		}
		this.setState({
			source,
			expr,
			error,
		});
	}
}
