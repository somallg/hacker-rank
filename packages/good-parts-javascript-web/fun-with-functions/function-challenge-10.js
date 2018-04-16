function addg(first) {
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

  return undefined;
}

function liftg(binary) {
  return function(first) {
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

function arrayg(first) {
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

function arrayg2(first) {
  if (first === undefined) {
    return [];
  }

  return liftg((array, value) => {
    array.push(value);

    return array;
  })([first]);
}

function continuize(fn) {
  return function(callback, arg) {
    callback(fn(arg));
  };
}

function continuizeES6(fn) {
  return function(callback, ...arg) {
    callback(fn(...arg));
  };
}

export { addg, liftg, arrayg, arrayg2, continuize, continuizeES6 };
