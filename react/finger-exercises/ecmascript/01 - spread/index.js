import { isArray } from './utils';

export function min(...args) {
  if (!args.length) {
    return undefined;
  }
  const values = isArray(args[0]) ? args[0] : args;
  return Math.min(...values);
}

export function copy(args) {
  return isArray(args) ? [...args] : { ...args };
}

export function reverseMerge(arrOne, ArrTwo) {
  return [...ArrTwo, ...arrOne];
}

export function filterAttribs({ a, b, ...filterObj }) {
  return filterObj;
}
