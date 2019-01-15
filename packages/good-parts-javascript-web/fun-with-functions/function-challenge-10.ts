import { BinaryFunction } from './function.util';

type EmptyFn = () => void;
type ArraygFn = () => number[];
type MoreFn = ((next?: number) => number | undefined | MoreFn) | ArraygFn;

function addg(first?: number): EmptyFn | MoreFn {
  if (first === undefined) {
    return emptyFn;
  }

  function emptyFn(): void {
    return undefined;
  }

  function moreFn(next?: number): number | MoreFn {
    if (next === undefined) {
      return first || 0;
    }

    /* tslint:disable:no-parameter-reassignment */
    first = (first || 0) + next;

    return moreFn;
  }

  return moreFn;
}

function liftg(
  binary: BinaryFunction<number, number>
): (first?: number) => undefined | MoreFn {
  function firstFn(first?: number): undefined | MoreFn {
    if (first === undefined) {
      return first;
    }

    function moreFn(next?: number): number | undefined | MoreFn {
      if (next === undefined) {
        return first;
      }
      first = binary(<number>first, next);

      return moreFn;
    }

    return moreFn;
  }

  return firstFn;
}

function arrayg(first?: number): MoreFn {
  const arr: number[] = [];

  function more(next?: number): MoreFn {
    if (next === undefined) {
      return arraygFn;
    }

    arr.push(next);

    return more;
  }

  function arraygFn(): number[] {
    return arr;
  }

  return more(first);
}

// tslint:disable-next-line
function arrayg2(first?: number): any {
  if (first === undefined) {
    // @ts-ignore
    return (): void => [];
  }

  // @ts-ignore
  return liftg((array: number[], value: number) => {
    array.push(value);

    return array;
  })([first]);
}

type Continuized<T, U, V> = (cb: (arg: U) => V, arg: T) => V;

function continuize<T, U, V>(fn: (arg: T) => U): Continuized<T, U, V> {
  return (callback: (arg: U) => V, arg: T): V => callback(fn(arg));
}

type ContinuizedES6<T, U, V> = (cb: (arg: U) => V, ...args: T[]) => V;

function continuizeES6<T, U, V>(
  fn: (...args: T[]) => U
): ContinuizedES6<T, U, V> {
  return (callback: (arg: U) => V, ...args: T[]): V => callback(fn(...args));
}

export {
  addg,
  liftg,
  arrayg,
  arrayg2,
  continuize,
  Continuized,
  continuizeES6,
  ContinuizedES6
};
