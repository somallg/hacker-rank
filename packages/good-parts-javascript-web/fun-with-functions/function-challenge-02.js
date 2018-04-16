import { liftf } from './function-challenge-01';

function curry(binary, first) {
  return function(second) {
    return binary(first, second);
  };
}

function curry2(binary, first) {
  return liftf(binary)(first);
}

// ES6
function curryES6(func, ...first) {
  return function(...second) {
    return func(...first, ...second);
  };
}

export { curry };
