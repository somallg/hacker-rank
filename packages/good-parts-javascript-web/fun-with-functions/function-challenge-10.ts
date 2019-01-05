import { BinaryFunction } from './function.util';

function addg(first?: number): (n?: number) => number | any {
  if (first === undefined) {
    return () => undefined;
  }

  const more = (next: number | undefined) => {
    if (next === undefined) {
      return first || 0;
    }

    /* tslint:disable:no-parameter-reassignment */
    first = (first || 0) + next;
    return more;
  };

  return more;
}

function liftg(
  binary: BinaryFunction<any, any>
): (first?: any) => (next?: number) => number | any {
  return (first?: any) => {
    if (first === undefined) {
      return first;
    }

    return function more(next?: number) {
      if (next === undefined) {
        return first;
      }
      first = binary(first, next);

      return more;
    };
  };
}

function arrayg(first?: number): (n?: number) => number | any {
  const arr: number[] = [];

  const more = (next?: number): any => {
    if (next === undefined) {
      return () => arr;
    }

    arr.push(next);

    return more;
  };

  return more(first);
}

function arrayg2(first?: number): any {
  if (first === undefined) {
    return () => [];
  }

  return liftg((array: number[], value: number) => {
    array.push(value);
    return array;
  })([first]);
}

function continuize(
  fn: (arg: any) => any
): (cb: (arg: any) => any, arg: any) => any {
  return (callback: (arg: any) => any, arg: any) => callback(fn(arg));
}

function continuizeES6(
  fn: (...args: any[]) => any
): (cb: (arg: any) => any, ...args: any[]) => any {
  return (callback: (arg: any) => any, ...args: any[]) => callback(fn(...args));
}

export { addg, liftg, arrayg, arrayg2, continuize, continuizeES6 };
