import { isArray } from './utils';

export function min(arg) {
  if (isArray(arg)) {
    return Math.min(...arg);
  }
  return Math.min(arg);
}

export function copy() {

}
