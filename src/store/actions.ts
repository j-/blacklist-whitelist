import { Action } from 'redux';

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
