import { Reducer } from 'redux';
import { buildSimpleCharCodeList, PRINTABLE } from '../char';
import { isActionInvertRange } from './actions';

export interface ReducerState extends Array<number> {

}

const DEFAULT_STATE: ReducerState = PRINTABLE;

const numeric = (a: number, b: number) => a - b;

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionInvertRange(action)) {
		const { charCodes } = action.data;
		const toRemove = charCodes.filter((item) => state.indexOf(item) >= 0);
		const toAdd = charCodes.filter((item) => state.indexOf(item) < 0);
		return [
			...state.filter((item) => toRemove.indexOf(item) < 0),
			...toAdd,
		].sort(numeric);
	}

	return state;
};

export default reducer;

export const isSelected = (state: ReducerState, charCode: number) => (
	state.indexOf(charCode) > -1
);

export const buildBlacklistSource = (state: ReducerState) => (
	'[^' + buildSimpleCharCodeList(state) + ']'
);

export const buildWhitelistSource = (state: ReducerState) => (
	'[' + buildSimpleCharCodeList(state) + ']'
);
