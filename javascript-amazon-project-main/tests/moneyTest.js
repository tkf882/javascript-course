import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency()');

console.log('basic');
formatCurrency(2095) === '20.95' ? console.log('passed') : console.log('failed');
console.log('0 case');
formatCurrency(0) === '0.00' ? console.log('passed') : console.log('failed');
console.log('round up');
formatCurrency(2000.5) === '20.01' ? console.log('passed') : console.log('failed');
console.log('round down');
formatCurrency(2000.4) === '20.00' ? console.log('passed') : console.log('failed');
