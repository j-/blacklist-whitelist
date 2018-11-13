export type CharCodeList = number[];
export type SimpleCharCodeList = Array<number | true>;

export const simplifyCharCodeList = (charCodeList: CharCodeList): SimpleCharCodeList => {
	const result: SimpleCharCodeList = [...charCodeList];
	return result;
};

const padStart = (string: string) => (
	('0000' + string).substr(-4)
);

const charCodeToExp = (charCode: number) => (
	'\\u' + padStart(charCode.toString(16))
);

export const buildSimpleCharCodeList = (simpleCharCodeList: SimpleCharCodeList) => (
	simpleCharCodeList.map((item) => (
		item === true ? '-' : charCodeToExp(item)
	)).join('')
);
