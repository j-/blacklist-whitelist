import { combineReducers } from 'redux';
import * as highlighted from './reducer-highlighted';
import * as selected from './reducer-selected';

export interface RootReducerState {
	highlighted: highlighted.ReducerState;
	selected: selected.ReducerState;
}

const reducer = combineReducers<RootReducerState>({
	highlighted: highlighted.default,
	selected: selected.default,
});

export default reducer;

export const isHighlightRangeNonPrintable = (state: RootReducerState) => (
	highlighted.isHighlightRangeNonPrintable(state.highlighted)
);

export const isHighlightRangePrintable = (state: RootReducerState) => (
	highlighted.isHighlightRangePrintable(state.highlighted)
);

export const isHightlightRangeAny = (state: RootReducerState) => (
	highlighted.isHightlightRangeAny(state.highlighted)
);

export const isSelected = (state: RootReducerState, charCode: number) => (
	selected.isSelected(state.selected, charCode)
);

export const buildBlacklistSource = (state: RootReducerState) => (
	selected.buildBlacklistSource(state.selected)
);

export const buildWhitelistSource = (state: RootReducerState) => (
	selected.buildWhitelistSource(state.selected)
);
