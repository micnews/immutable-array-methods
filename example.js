var methods = require('./');

var input = [1, 2, 3];
var result = methods.pop(input, 4);
console.log('pop()');
console.log('input is unchanged', input);
console.log('result', result);

result = methods.splice(input, 1, 1, 'foo');
console.log('splice()');
console.log('input is unchanged', input);
console.log('result', result);

// num() doesnt' return a new array if the values are unchanged
result = methods.map(input, function (num) {
  return num % 2;
});

// also available is .push(), .shift(), .unshift(), .set()
