export function counter(n) {
  return {
    up() {
      return ++n;
    },

    down() {
      return --n;
    },
  };
}

export function revocable(binary) {
  return {
    invoke(a, b) {
      if (binary !== undefined) {
        return binary(a, b);
      }

      return undefined;
    },
    revoke() {
      binary = undefined;
    },
  };
}
