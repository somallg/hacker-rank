interface Thenable<T> {
  then<V>(fn: (data: T) => V): Thenable<V>;
}

function createThenable<T>(data: T): Thenable<T> {
  return {
    then: <V>(fn: (data: T) => V): Thenable<V> => createThenable<V>(fn(data))
  };
}

export { createThenable, Thenable };
