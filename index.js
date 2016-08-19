const setMultiple = (array, index, items) =>
  items.length === 0
  ? array
  : setMultiple(set(array, index, items[0]), index + 1, items.slice(1));

export const push = (array, value) => array.concat([value]);

export const pop = (array) => array.slice(0, -1);

export const shift = (array) => array.slice(1);

export const unshift = (array, value) => [value].concat(array);

export const splice = (array, index, deleteCount, ...items) =>
  deleteCount === items.length
  ? setMultiple(array, index, items)
  : array.slice(0, index).concat(items).concat(array.slice(index + deleteCount));

export const set = (array, index, value) =>
  array[index] === value
  ? array
  : array.slice(0, index).concat([value]).concat(array.slice(index + 1));

export const flatten = array =>
  array.some(value => Array.isArray(value))
  ? [].concat(...array)
  : array;

export const map = (array, fn) => {
  let changed = false;
  const newArray = array.map((obj, index) => {
    const newObj = fn(obj, index);
    changed = changed || obj !== newObj;
    return newObj;
  });

  return changed ? newArray : array;
};

export const move = (array, fromIndex, toIndex) => {
  return splice(
    splice(array, fromIndex, 1),
    toIndex,
    0,
    array[fromIndex]
  );
};

export default {push, pop, shift, unshift, splice, set, flatten, map, move};
