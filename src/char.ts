export type CharCodeList = number[];

const padStart = (string: string) => (
	('0000' + string).substr(-4)
);

const charCodeToExp = (charCode: number) => (
	'\\u' + padStart(charCode.toString(16))
);

export const buildSimpleCharCodeList = (inputList: CharCodeList) => {
	let result = '';
	let run = false;

	for (let i = 0; i < inputList.length; i++) {
		const lastCh = inputList[i - 1];
		const thisCh = inputList[i];
		const nextCh = inputList[i + 1];
		if (lastCh + 1 === thisCh && nextCh - 1 === thisCh) {
			if (run) {
				continue;
			}
			run = true;
			result += '-';
		} else {
			run = false;
			result += charCodeToExp(thisCh);
		}
	}

	return result;
};
