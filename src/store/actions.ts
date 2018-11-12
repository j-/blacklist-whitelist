import { Action } from 'redux';

export interface ActionToggleSelected extends Action {
	type: 'ToggleSelected';
	data: {
		charCode: number;
	};
}

export const isActionToggleSelected = (action: Action): action is ActionToggleSelected => (
	action.type === 'ToggleSelected'
);

export const toggleSelected = (charCode: number): ActionToggleSelected => ({
	type: 'ToggleSelected',
	data: {
		charCode,
	},
});
