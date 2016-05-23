import test from 'ava';
import 'babel-core/register';
import {push, pop, unshift, shift, splice, set} from './index';
import arrayMethods from './index';

test('push()', t => {
  t.same(push(['a', 'b', 'c'], 'd'), ['a', 'b', 'c', 'd']);
  t.same(push(['a', 'b', 'c'], ['d']), ['a', 'b', 'c', ['d']]);
});

test('unshift()', t => {
  t.same(unshift(['a', 'b', 'c'], 'd'), ['d', 'a', 'b', 'c']);
  t.same(unshift(['a', 'b', 'c'], ['d']), [['d'], 'a', 'b', 'c']);
});

test('pop()', t => {
  t.same(pop(['a', 'b', 'c']), ['a', 'b']);
});

test('shift()', t => {
  t.same(shift(['a', 'b', 'c']), ['b', 'c']);
});

test('splice()', t => {
  t.same(splice(['a', 'b', 'c', 'd'], 2, 1), ['a', 'b', 'd']);
  t.same(splice(['a', 'b', 'c', 'd'], 2, 0, 'e'), ['a', 'b', 'e', 'c', 'd']);
});

test('set', t => {
  t.same(set([0, 1, 2], 0, 666), [666, 1, 2]);
  t.same(set([], 0, [666]), [[666]]);
});

test('default import', t => {
  t.is(arrayMethods.push, push);
  t.is(arrayMethods.unshift, unshift);
  t.is(arrayMethods.pop, pop);
  t.is(arrayMethods.shift, shift);
  t.is(arrayMethods.splice, splice);
  t.is(arrayMethods.set, set);
});
