import test from 'ava';
import 'babel-core/register';
import {push, pop, unshift, shift, splice, set, flatten, map, move} from './index';
import arrayMethods from './index';

test('push()', t => {
  t.deepEqual(push(['a', 'b', 'c'], 'd'), ['a', 'b', 'c', 'd']);
  t.deepEqual(push(['a', 'b', 'c'], ['d']), ['a', 'b', 'c', ['d']]);
});

test('unshift()', t => {
  t.deepEqual(unshift(['a', 'b', 'c'], 'd'), ['d', 'a', 'b', 'c']);
  t.deepEqual(unshift(['a', 'b', 'c'], ['d']), [['d'], 'a', 'b', 'c']);
});

test('pop()', t => {
  t.deepEqual(pop(['a', 'b', 'c']), ['a', 'b']);
});

test('shift()', t => {
  t.deepEqual(shift(['a', 'b', 'c']), ['b', 'c']);
});

test('splice()', t => {
  t.deepEqual(splice(['a', 'b', 'c', 'd'], 2, 1), ['a', 'b', 'd']);
  t.deepEqual(splice(['a', 'b', 'c', 'd'], 2, 0, 'e'), ['a', 'b', 'e', 'c', 'd']);
});

test('splice() no change', t => {
  const input = ['a', 'b', 'c', 'd'];
  const actual = splice(input, 0, 0);
  const expected = input;
  t.is(actual, expected);
});

test('splice(), unchanged array', t => {
  const input = ['a', 'b', 'c', 'd'];
  const actual = splice(input, 2, 2, 'c', 'd');
  const expected = input;
  t.is(actual, expected);
});

test('set', t => {
  t.deepEqual(set([0, 1, 2], 0, 666), [666, 1, 2]);
  t.deepEqual(set([], 0, [666]), [[666]]);
  const input = [0, 1, 2];
  const actual = set(input, 1, 1);
  const expected = input;
  t.is(actual, expected);
});

test('flatten, no nested arrays', t => {
  const input = [1, 2, 3];
  const actual = flatten(input);
  const expected = input;
  t.is(actual, expected);
});

test('flatten, with nested arrays', t => {
  const input = Object.freeze([1, [2, 3], [4, [5]]]);
  const actual = flatten(input);
  const expected = [1, 2, 3, 4, [5]];
  t.deepEqual(actual, expected);
});

test('map', t => {
  const input = [1, 2, 3, 4];
  const actual = map(input, num => num % 2);
  const expected = [1, 0, 1, 0];
  t.deepEqual(actual, expected);
});

test('map not changed values', t => {
  const input = [1, 2, 3];
  const actual = map(input, num => num);
  const expected = input;
  t.is(actual, expected);
});

test('map w index', t => {
  const input = ['', ''];
  const actual = map(input, (val, index) => index);
  const expected = [0, 1];
  t.deepEqual(actual, expected);
});

test('move() forward', t => {
  const input = [1, 2, 3];
  const from = 0;
  const to = 1;
  const actual = move(input, from, to);
  const expected = [2, 1, 3];
  t.deepEqual(actual, expected);
});

test('move() backward', t => {
  const input = [1, 2, 3];
  const from = 1;
  const to = 0;
  const actual = move(input, from, to);
  const expected = [2, 1, 3];
  t.deepEqual(actual, expected);
});

test('move() multiple indexes length', t => {
  const input = [1, 2, 3];
  const from = 0;
  const to = 2;
  const actual = move(input, from, to);
  const expected = [2, 3, 1];
  t.deepEqual(actual, expected);
});

test('default import', t => {
  t.is(arrayMethods.push, push);
  t.is(arrayMethods.unshift, unshift);
  t.is(arrayMethods.pop, pop);
  t.is(arrayMethods.shift, shift);
  t.is(arrayMethods.splice, splice);
  t.is(arrayMethods.set, set);
  t.is(arrayMethods.flatten, flatten);
  t.is(arrayMethods.map, map);
});
