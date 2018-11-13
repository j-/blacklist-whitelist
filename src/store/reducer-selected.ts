import { Reducer } from 'redux';
import { buildSimpleCharCodeList } from '../char';
import { isActionToggleSelected } from './actions';

export interface ReducerState {
	selected: number[];
}

const DEFAULT_STATE: ReducerState = {
	selected: [],
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionToggleSelected(action)) {
		const { charCode } = action.data;
		const { selected } = state;
		const selectedState = isSelected(state, charCode);
		return {
			...state,
			selected:
				// Is the character already selected?
				selectedState ?
					// If so, remove it
					selected.filter((item) => item !== charCode) :
					// If not, append it
					[...selected, charCode].sort(),
		};
	}

	return state;
};

export default reducer;

export const isSelected = (state: ReducerState, charCode: number) => (
	state.selected.indexOf(charCode) > -1
);

export const buildBlacklist = (state: ReducerState) => (
	'/[^' + buildSimpleCharCodeList(state.selected) + ']/'
);

export const buildWhitelist = (state: ReducerState) => (
	'/[' + buildSimpleCharCodeList(state.selected) + ']/'
);
