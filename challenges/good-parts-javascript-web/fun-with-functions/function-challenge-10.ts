function addg(first?: number | undefined): Function {
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

function liftg(binary: Function): Function {
  return (first: number) => {
    if (first === undefined) {
      return first;
    }

    return function more(next: number) {
      if (next === undefined) {
        return first;
      }
      first = binary(first, next);

      return more;
    };
  };
}

function arrayg(first?: number): Function {
  const arr: number[] = [];

  const more = (next?: number): Function => {
    if (next === undefined) {
      return () => arr;
    }

    arr.push(next);

    return more;
  };

  return more(first);
}

function arrayg2(first?: number): Function {
  if (first === undefined) {
    return () => [];
  }

  return liftg((array: number[], value: number) => {
    array.push(value);

    return array;
  })([first]);
}

function continuize(fn: Function): Function {
  return (callback: Function, arg: any) => {
    callback(fn(arg));
  };
}

function continuizeES6(fn: Function): Function {
  return (callback: Function, ...arg: any[]) => {
    callback(fn(...arg));
  };
}

export { addg, liftg, arrayg, arrayg2, continuize, continuizeES6 };
