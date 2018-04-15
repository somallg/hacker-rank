export function add(first, second) {
  return first + second;
}

export function sub(first, second) {
  return first - second;
}

export function mul(first, second) {
  return first * second;
}

export function identityf(n) {
  return function () {
    return n;
  };
}

export function addf(first) {
  return function (second) {
    return first + second;
  };
}

export function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary(first, second);
    };
  };
}
