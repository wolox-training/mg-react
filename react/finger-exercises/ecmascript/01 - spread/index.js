import { isArray } from './utils';

export function min(...args) {
  if (args.length === 0) {
    return undefined;
  }
  const values = isArray(args[0]) ? args[0] : args;

  return Math.min(...values);
}

export function copy(args) {
  return isArray(args) ? [...args] : { ...args };
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
