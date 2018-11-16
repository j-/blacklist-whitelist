import { Reducer } from 'redux';
import { isActionHighlightRange } from './actions';
import { Range } from '../char';

export interface ReducerState  {
	highlightNonPrintable: boolean;
	highlightPrintable: boolean;
}

const DEFAULT_STATE: ReducerState = {
	highlightNonPrintable: false,
	highlightPrintable: false,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionHighlightRange(action)) {
		const { range } = action.data;
		return {
			...state,
			highlightNonPrintable: range === Range.NON_PRINTABLE,
			highlightPrintable: range === Range.PRINTABLE,
		};
	}

	return state;
};

export default reducer;

export const isHighlightRangeNonPrintable = (state: ReducerState) => (
	state.highlightNonPrintable
);

export const isHighlightRangePrintable = (state: ReducerState) => (
	state.highlightPrintable
);

export const isHightlightRangeAny = (state: ReducerState) => (
	isHighlightRangeNonPrintable(state) ||
	isHighlightRangePrintable(state)
);
