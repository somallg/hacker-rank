function counter(n) {
  return {
    up() {
      return ++n;
    },

    down() {
      return --n;
    }
  };
}

function revocable(binary) {
  return {
    invoke(a, b) {
      if (binary !== undefined) {
        return binary(a, b);
      }

      return undefined;
    },
    revoke() {
      binary = undefined;
    }
  };
}

export { counter, revocable };
