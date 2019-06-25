import { isArray } from './utils';

export function min(...arg) {
  if (isArray(...arg)) {
    const list = [...arg];
    return Math.min(...list[0]);
  }
  return Math.min(...arg);
}

export function copy() {

}
