function generateArray(length: number, maxExclusive = length, random = true) {
  const res = [];

  for (let i = 0; i < length; i = i + 1) {
    res.push(random ? Math.floor(Math.random() * maxExclusive) : 0);
  }

  return res;
}

export { generateArray };
