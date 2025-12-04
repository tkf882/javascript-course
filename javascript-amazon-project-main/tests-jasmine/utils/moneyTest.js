import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('convert cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('0 case', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('round up', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
    it('round down', () => {
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });
});
