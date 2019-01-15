/**
 * Interviewbit - GrayCode
 */

function grayCode(n: number): number[] {
  // tslint:disable-next-line
  function helper(n: number): string[] {
    if (n <= 0) {
      return [];
    }
    if (n === 1) {
      return ['0', '1'];
    }

    const previousGrayCode: string[] = helper(n - 1);

    return [
      ...previousGrayCode.map((c: string) => `0${c}`),
      ...previousGrayCode.reverse().map((c: string) => `1${c}`)
    ];
  }

  return helper(n).map((binary: string) => Number.parseInt(binary, 2));
}

export { grayCode };
