import { combineReducers } from 'redux';
import * as selected from './reducer-selected';

export interface RootReducerState {
	selected: selected.ReducerState;
}

const reducer = combineReducers<RootReducerState>({
	selected: selected.default,
});

export default reducer;

export const isSelected = (state: RootReducerState, charCode: number) => (
	selected.isSelected(state.selected, charCode)
);

export const buildBlacklist = (state: RootReducerState) => (
	selected.buildBlacklist(state.selected)
);

export const buildWhitelist = (state: RootReducerState) => (
	selected.buildWhitelist(state.selected)
);
