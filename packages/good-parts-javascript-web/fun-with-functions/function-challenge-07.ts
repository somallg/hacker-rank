import { BinaryFunction } from './function.util';

interface Counter {
  up(): number;
  down(): number;
}

interface Revocable {
  invoke(a: number, b: number): number | undefined;
  revoke(): void;
}

function counter(n: number): Counter {
  return {
    up(): number {
      // tslint:disable-next-line
      return ++n;
    },

    down(): number {
      // tslint:disable-next-line
      return --n;
    }
  };
}

function revocable(
  binary: BinaryFunction<number, number> | undefined
): Revocable {
  return {
    invoke(a: number, b: number): number | undefined {
      if (binary !== undefined) {
        return binary(a, b);
      }

      return undefined;
    },
    revoke(): void {
      // tslint:disable-next-line
      binary = undefined;
    }
  };
}

export { counter, Counter, revocable, Revocable };
