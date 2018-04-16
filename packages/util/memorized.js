function memorized(fn) {
  var cached = {};

  return function(n) {
    if (cached[n] === undefined) {
      cached[n] = fn(n);
    }

    return cached[n];
  };
}

module.exports = {
  memorized
};
