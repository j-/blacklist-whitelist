import * as React from 'react';
import * as classNames from 'classnames';
import TestGrid from './TestGrid';

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
		return (
			<div className="TestExpr">
				<h2 className="mb-3"><label htmlFor="TestExpr-source">Test expression</label></h2>
				<input
					id="TestExpr-source"
					className={classNames('form-control text-monospace', error && 'is-invalid')}
					type="text"
					value={source}
					onChange={this.handleSourceChange}
				/>
				{
					error ?
						<small className="invalid-feedback">{error.message}</small> :
						<small className="form-text text-muted">Will be interpreted as <code>expr.source</code></small>
				}
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
