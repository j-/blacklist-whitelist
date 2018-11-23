import * as React from 'react';

export interface Props {
	error: Error | null;
}

const TestExprFeedback: React.StatelessComponent<Props> = ({ error }) => (
	error ?
		// There was an error
		<small className="invalid-feedback">{error.message}</small> :
		// Everything is OK
		<small className="form-text text-muted">
			Will be interpreted as <code>expr.source</code>
		</small>
);

export default TestExprFeedback;
