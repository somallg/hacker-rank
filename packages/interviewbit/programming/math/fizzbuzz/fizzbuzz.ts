/**
 * Fizzbuzz
 */

function fizzbuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i = i + 1) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push('FizzBuzz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else {
      result.push(`${i}`);
    }
  }

  return result;
}

export { fizzbuzz };
