function generateArray(length: number, random = false) {
  const res = [];

  for (let i = 0; i < length; i = i + 1) {
    res.push(random ? Math.random() * 10_000 : 0);
  }

  return res;
}

export { generateArray };
