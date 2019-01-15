/**
 * AllocateBooks
 */

function findNumberOfStudents(books: number[], volume: number): number {
  let sum: number = 0;
  let countOfStudent: number = 1;

  books.forEach((v: number) => {
    if (sum + v <= volume) {
      sum = sum + v;
    } else {
      sum = v;
      countOfStudent = countOfStudent + 1;
    }
  });

  return countOfStudent;
}

function allocateBooks(books: number[], m: number): number {
  const l: number = books.length;
  if (l < m || l === 0) {
    return -1;
  }
  const maxVolume: number = books.reduce((acc: number, v: number) =>
    Math.max(acc, v)
  );
  const sumVolume: number = books.reduce((acc: number, v: number) => acc + v);

  let start: number = maxVolume;
  let end: number = sumVolume;

  while (start <= end) {
    // tslint:disable:no-bitwise
    const middle: number = (start + end) >>> 1;
    if (findNumberOfStudents(books, middle) <= m) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return start;
}

export { allocateBooks };
