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
  return Object.assign({}, args);
}
