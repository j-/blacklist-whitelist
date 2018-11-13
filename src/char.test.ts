import { simplifyCharCodeList } from './char';

describe('simplifyCharCodeList()', () => {
	it('returns empty list as-is', () => {
		const actual = simplifyCharCodeList([]);
		expect(actual).toEqual([]);
	});
});
