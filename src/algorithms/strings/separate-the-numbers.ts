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

// function canSeparateNumbers(s: string, length: number): [boolean, number] {
//   let from = 0;
//   const results: number[] = [];
//   for (let i = 0; i < s.length; i = i + 1) {
//     const current: string = s.substr(from, length);
//     const expectNext: number = parseInt(current, 10) + 1;
//     const actualNext: string = s.substr(from + current.length, expectNext.toString().length);
//
//     console.log(`i=${i}, current=${current}, expectNext=${expectNext}, actualNext=${actualNext}`);
//
//     if (expectNext !== parseInt(actualNext, 10)) {
//       return [false, -1];
//     }
//
//     results.push(parseInt(current, 10));
//     from = from + current.length;
//   }
//
//   return [true, results[0]];
// }

function canSeparateNumbers(acc: [], s: string, length: number): number[] {


  return acc;
}

console.log(canSeparateNumbers('123', 1));
