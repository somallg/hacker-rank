import { BinaryFunction } from './function.util';

function counter(n: number) {
  return {
    up() {
      return ++n;
    },

    down() {
      return --n;
    }
  };
}

function revocable(binary: BinaryFunction | undefined) {
  return {
    invoke(a: number, b: number) {
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
