import { Action } from 'redux';
import { NON_PRINTABLE, PRINTABLE, Range } from '../char';

/* Invert range */

export interface ActionInvertRange extends Action {
	type: 'InvertRange';
	data: {
		charCodes: number[];
	};
}

export const isActionInvertRange = (action: Action): action is ActionInvertRange => (
	action.type === 'InvertRange'
);

export const invertRange = (charCodes: number[]): ActionInvertRange => ({
	type: 'InvertRange',
	data: {
		charCodes,
	},
});

export const invertCharacter = (charCode: number) => (
	invertRange([charCode])
);

export const invertNonPrintable = () => (
	invertRange(NON_PRINTABLE)
);

export const invertPrintable = () => (
	invertRange(PRINTABLE)
);

/* Highlight range */

export interface ActionHighlightRange extends Action {
	type: 'HighlightRange';
	data: {
		range: Range | null;
	};
}

export const isActionHighlightRange = (action: Action): action is ActionHighlightRange => (
	action.type === 'HighlightRange'
);

export const highlightRange = (range: Range): ActionHighlightRange => ({
	type: 'HighlightRange',
	data: {
		range,
	},
});

export const highlightRangeNonPrintable = () => (
	highlightRange(Range.NON_PRINTABLE)
);

export const highlightRangePrintable = () => (
	highlightRange(Range.PRINTABLE)
);

export const removeHightlight = (): ActionHighlightRange => ({
	type: 'HighlightRange',
	data: {
		range: null,
	},
});
