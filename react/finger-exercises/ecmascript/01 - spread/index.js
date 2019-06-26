import { isArray } from './utils';

export function min(...args) {
  if (args[0] === undefined) {
    return undefined;
  }
  if (isArray(args[0])) {
    return Math.min(...args[0]);
  }
  return Math.min(...args);
}

export function copy(args) {
  if (isArray(args)) {
    return [...args];
  }
  return Object.assign({}, args);
}

export function reverseMerge(arrOne, ArrTwo) {
  const reverseMergeArr = [...ArrTwo, ...arrOne];
  return reverseMergeArr;
}

export function filterAttribs(args) {
  const banedKey = ['a', 'b'];
  const filterObj = {};
  Object.keys(args)
    .filter(key => !banedKey.includes(key))
    .map(key => {
      filterObj[key] = args[key];
      return filterObj;
    });

  return filterObj;
}
