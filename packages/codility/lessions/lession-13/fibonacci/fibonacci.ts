/**
 * Codility - Fibonacci
 */

function fibonacci(length: number, modulo = 2 ** 30): number[] {
  const result = Array(length + 1).fill(1);

  for (let i = 2; i <= length; i = i + 1) {
    result[i] = (result[i - 1] + result[i - 2]) % modulo;
  }

  return result;
}
export { fibonacci };
