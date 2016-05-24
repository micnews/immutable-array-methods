import test from 'ava';
import 'babel-core/register';
import {push, pop, unshift, shift, splice, set} from './index';
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

test('set', t => {
  t.deepEqual(set([0, 1, 2], 0, 666), [666, 1, 2]);
  t.deepEqual(set([], 0, [666]), [[666]]);
  const input = [0, 1, 2];
  const actual = set(input, 1, 1);
  const expected = input;
  t.is(actual, expected);
});

test('default import', t => {
  t.is(arrayMethods.push, push);
  t.is(arrayMethods.unshift, unshift);
  t.is(arrayMethods.pop, pop);
  t.is(arrayMethods.shift, shift);
  t.is(arrayMethods.splice, splice);
  t.is(arrayMethods.set, set);
});
