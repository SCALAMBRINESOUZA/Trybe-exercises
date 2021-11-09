const assert = require('assert');
const myRemove = require('..//functionRemove');

 const myList = [5, 6, 7, 8];
 myRemove(myList, 5);


//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
//assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4,])
//assert.deepStrictEqual(myList, [5, 6, 7, 8]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);