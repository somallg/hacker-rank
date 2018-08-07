/**
 * ImplementPowerFunction
 */

function implementPowerFunction(x: number, n: number, d: number): number {
  if (n <= 1) {
    return x % d;
  }

  if (n % 2 === 0) {
    // tslint:disable:no-bitwise
    return implementPowerFunction(x, n >>> 1, d) ** 2 % d;
  }

  return (((x % d) * implementPowerFunction(x, (n - 1) >>> 1, d) ** 2) % d) % d;
}

export { implementPowerFunction };
