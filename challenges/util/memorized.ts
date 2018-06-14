function memorized<K, V>(fn: (x: K) => V): (x: K) => V {
  const memo = new Map<K, V>();

  return (x: K): V => {
    const [cachedValue = fn(x)] = [memo.get(x)];
    memo.set(x, cachedValue);

    return cachedValue;
  };
}

export { memorized };
