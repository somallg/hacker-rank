function memorized(fn: Function): Function {
  const cached = new Map();

  return (n: any): any => {
    if (!cached.has(n)) {
      cached.set(n, fn(n));
    }

    return cached.get(n);
  };
}

export { memorized };
