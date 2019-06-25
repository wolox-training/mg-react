import { isArray } from './utils';

export function min() {
  if (arguments[0] === undefined) {
    return undefined;
  }
  if (isArray(arguments[0])) {
    return Math.min(...arguments[0]);
  }
  return Math.min(...arguments);
}

export function copy() {

}
