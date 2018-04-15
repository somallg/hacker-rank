import { liftf } from './function-challenge-01';

export function curry(binary, first) {
  return function (second) {
    return binary(first, second);
  };
}

// export function curry(binary, first) {
//   return liftf(binary)(first);
// }

// ES6
function curryES6(func, ...first) {
  return function (...second) {
    return func(...first, ...second);
  };
}
