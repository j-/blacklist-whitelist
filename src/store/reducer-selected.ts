import { Reducer } from 'redux';
import { isActionToggleSelected } from './actions';

export interface ReducerState {
	selected: number[];
}

const DEFAULT_STATE: ReducerState = {
	selected: [],
};

const padStart = (string: string) => (
	('0000' + string).substr(-4)
);

const charCodeToExp = (charCode: number) => (
	'\\u' + padStart(charCode.toString(16))
);

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
	'/[^' + state.selected.map(charCodeToExp).join('') + ']/'
);

export const buildWhitelist = (state: ReducerState) => (
	'/[' + state.selected.map(charCodeToExp).join('') + ']/'
);
