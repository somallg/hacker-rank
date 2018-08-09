/**
 * IntegerToRoman
 */

function integerToRoman(n: number): string {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const letters = [
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
  let result = '';
  for (let i = 0; i < numbers.length; i += 1) {
    while (n >= numbers[i]) {
      result += letters[i];
      n = n - numbers[i];
    }
  }

  return result;
}

export { integerToRoman };
