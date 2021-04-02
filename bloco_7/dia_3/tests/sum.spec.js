const assert = require('assert');
const sum = require('..//funcoesTestes');

const sums = sum(4,'5');
// assert.strictEqual(sums, 9, '4 + 5 = 9');
//assert.strictEqual(sums, 0);
assert.throws(() => {sums()});