/**
 * IntegerToRoman
 */

function integerToRoman(n: number): string {
  const numbers: number[] = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1
  ];
  const letters: string[] = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];
  let result: string = '';
  for (let i: number = 0; i < numbers.length; i += 1) {
    while (n >= numbers[i]) {
      result += letters[i];
      // tslint:disable-next-line
      n = n - numbers[i];
    }
  }

  return result;
}

export { integerToRoman };
