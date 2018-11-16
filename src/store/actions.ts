import { Action } from 'redux';

export interface ActionInvertSelection extends Action {
	type: 'InvertSelection';
	data: {
		charCodes: number[];
	};
}

export const isActionInvertSelection = (action: Action): action is ActionInvertSelection => (
	action.type === 'InvertSelection'
);

export const invertSelection = (charCodes: number[]): ActionInvertSelection => ({
	type: 'InvertSelection',
	data: {
		charCodes,
	},
});
