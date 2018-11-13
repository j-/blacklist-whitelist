import { Reducer } from 'redux';
import { buildSimpleCharCodeList } from '../char';
import { isActionToggleSelected } from './actions';

export interface ReducerState extends Array<number> {

}

const DEFAULT_STATE: ReducerState = [];

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionToggleSelected(action)) {
		const { charCode } = action.data;
		const selectedState = isSelected(state, charCode);
		return (
			// Is the character already selected?
			selectedState ?
				// If so, remove it
				state.filter((item) => item !== charCode) :
				// If not, insert it
				[...state, charCode].sort()
		);
	}

	return state;
};

export default reducer;

export const isSelected = (state: ReducerState, charCode: number) => (
	state.indexOf(charCode) > -1
);

export const buildBlacklist = (state: ReducerState) => (
	'/[^' + buildSimpleCharCodeList(state) + ']/'
);

export const buildWhitelist = (state: ReducerState) => (
	'/[' + buildSimpleCharCodeList(state) + ']/'
);
