/**
 * Interviewbit - GrayCode
 */

function grayCode(n: number): number[] {
  function helper(n: number): string[] {
    if (n <= 0) {
      return [];
    }
    if (n === 1) {
      return ['0', '1'];
    }

    const previousGrayCode = helper(n - 1);

    return [
      ...previousGrayCode.map(c => `0${c}`),
      ...previousGrayCode.reverse().map(c => `1${c}`)
    ];
  }

  return helper(n).map(binary => Number.parseInt(binary, 2));
}

export { grayCode };
