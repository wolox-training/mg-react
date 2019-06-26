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
  const { a, b, ...filterObj } = args;
  return filterObj;
}
