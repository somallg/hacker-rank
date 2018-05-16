import { BinaryFunction } from './function.util';

function counter(n: number) {
  return {
    up() {
      // tslint:disable-next-line
      return ++n;
    },

    down() {
      // tslint:disable-next-line
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
      // tslint:disable-next-line
      binary = undefined;
    }
  };
}

export { counter, revocable };
