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

export const SYMBOLS = Object.freeze({
	0x00: 'NUL',
	0x01: 'SOH',
	0x02: 'STX',
	0x03: 'ETX',
	0x04: 'EOT',
	0x05: 'ENQ',
	0x06: 'ACK',
	0x07: 'BEL',
	0x08: 'BS',
	0x09: 'HT',
	0x0A: 'LF',
	0x0B: 'VT',
	0x0C: 'FF',
	0x0D: 'CR',
	0x0E: 'SO',
	0x0F: 'SI',
	0x10: 'DLE',
	0x11: 'DC1',
	0x12: 'DC2',
	0x13: 'DC3',
	0x14: 'DC4',
	0x15: 'NAK',
	0x16: 'SYN',
	0x17: 'ETB',
	0x18: 'CAN',
	0x19: 'EM',
	0x1A: 'SUB',
	0x1B: 'ESC',
	0x1C: 'FS',
	0x1D: 'GS',
	0x1E: 'RS',
	0x1F: 'US',
	0x20: 'SP',
	0x7F: 'DEL',
	0x80: 'PAD',
	0x81: 'HOP',
	0x82: 'BPH',
	0x83: 'NBH',
	0x84: 'IND',
	0x85: 'NEL',
	0x86: 'SSA',
	0x87: 'ESA',
	0x88: 'HTS',
	0x89: 'HTJ',
	0x8A: 'LTS',
	0x8B: 'PLD',
	0x8C: 'PLU',
	0x8D: 'RI',
	0x8E: 'SS2',
	0x8F: 'SS3',
	0x90: 'DCS',
	0x91: 'PU1',
	0x92: 'PU2',
	0x93: 'STS',
	0x94: 'CCH',
	0x95: 'MW',
	0x96: 'SPA',
	0x97: 'EPA',
	0x98: 'SOS',
	0x99: 'SGCI',
	0x9A: 'SCI',
	0x9B: 'CSI',
	0x9C: 'ST',
	0x9D: 'OSC',
	0x9E: 'PM',
	0x9F: 'APC',
	0xA0: 'NBSP',
	0xAD: 'SHY',
});
