export const push = (array, value) => array.concat([value]);
export const pop = (array) => array.slice(0, -1);
export const shift = (array) => array.slice(1);
export const unshift = (array, value) => [value].concat(array);
export const splice = (array, start, deleteCount, ...items) =>
  array.slice(0, start).concat(items).concat(array.slice(start + deleteCount));
export default {push, pop, shift, unshift, splice};
