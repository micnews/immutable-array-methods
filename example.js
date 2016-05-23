var methods = require('./');

var input = [1, 2, 3];
var result = methods.pop(input, 4);
console.log('pop()')
console.log('input is unchanged', input);
console.log('result', result);

result = methods.splice(input, 1, 1, 'foo');
console.log('splice()');
console.log('input is unchanged', input);
console.log('result', result);

// also available is .push(), .shift(), .unshift(), .set()
