interface Vector<T> {
  getI(i: number): T;
  store(i: number | string, v: T): void;
  append(v: T): void;
}

function vector<T>(): Vector<T> {
  const arr: T[] = [];

  return {
    getI(i: number): T {
      return arr[i];
    },

    store(i: number | string, v: T): void {
      arr[i] = v;
    },

    append(v: T): void {
      arr.push(v);
    }
  };
}

export { vector, Vector };
