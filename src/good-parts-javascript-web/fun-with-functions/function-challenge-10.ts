import { exec } from 'child_process';

export function addg(first) {
  function more(next) {
    if (next === undefined) {
      return first;
    }

    first += next;
    return more;
  }

  if (first !== undefined) {
    return more;
  }
}

export function liftg(binary) {
  return function (first) {
    if (first === undefined) {
      return first;
    }

    return function more(next) {
      if (next === undefined) {
        return first;
      }
      first = binary(first, next);

      return more;
    };
  };
}

export function arrayg(first) {
  const arr = [];

  function more(next) {
    if (next === undefined) {
      return arr;
    }

    arr.push(next);

    return more;
  }

  return more(first);
}

export function arrayg2(first) {
  if (first === undefined) {
    return [];
  }

  return liftg(function (array, value) {
    array.push(value);

    return array;
  })([first]);
}

export function continuize(fn) {
  return function (callback, arg) {
    callback(fn(arg));
  };
}

export function continuizeES6(fn) {
  return function (callback, ...arg) {
    callback(fn(...arg));
  };
}
