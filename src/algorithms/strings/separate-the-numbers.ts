/**
 * @url: https://www.hackerrank.com/challenges/separate-the-numbers/problem
 */

function separateNumbers(s: string): boolean {
  // Complete this function
  let i: number = 1;
  const start: number = 0;
  const result: number[] = [];
  while (i <= s.length / 2) {
    const first: string = s.substr(start, i);
    const expectNext: number = parseInt(first, 10) + 1; // coerce to number
    const actualNext: string = s.substr(first.length, expectNext.toString().length);

    if (expectNext === parseInt(actualNext, 10)) {
      result.push(parseInt(first, 10));
    }

    i = i + 1;
  }

  if (result.length > 0) {
    console.log(`YES ${result[0]}`);
  } else {
    console.log('NO');
  }

  return true;
}

separateNumbers('12');
