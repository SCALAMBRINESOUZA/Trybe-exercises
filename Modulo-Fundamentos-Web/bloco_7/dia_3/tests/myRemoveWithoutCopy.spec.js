const assert = require('assert');
const myRemovecopy = require('..//functionMyRemoveWithoutCopy');

const myList = [1, 2, 3, 4,];

//assert.deepStrictEqual(typeof myRemovecopy, 'function');
//assert.deepStrictEqual(myRemovecopy([1, 2, 3, 4], 3), [1, 2, 4]);
//assert.notDeepStrictEqual(myRemovecopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
//myRemovecopy(myList, 1);
//assert.strictEqual(myList.length, 3);
assert.deepStrictEqual(myRemovecopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
