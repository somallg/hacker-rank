function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}

function identityf(n) {
  return function() {
    return n;
  };
}

function addf(first) {
  return function(second) {
    return first + second;
  };
}

function liftf(binary) {
  return function(first) {
    return function(second) {
      return binary(first, second);
    };
  };
}

export { add, sub, mul, identityf, addf, liftf };
