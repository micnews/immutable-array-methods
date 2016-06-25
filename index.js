export const push = (array, value) => array.concat([value]);
export const pop = (array) => array.slice(0, -1);
export const shift = (array) => array.slice(1);
export const unshift = (array, value) => [value].concat(array);
export const splice = (array, start, deleteCount, ...items) =>
  array.slice(0, start).concat(items).concat(array.slice(start + deleteCount));
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
export default {push, pop, shift, unshift, splice, set, flatten, map};
