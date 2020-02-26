/**
 * EnglishInt
 */

// represent number from 0 to 19
const smalls = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];

// represent ten digit, add some padding so index 2 map to twenty, index 3 map to thirty and so on
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

// represent 1000 digt
const bigs = ['', 'thousand', 'million', 'billion'];

function englishInt(n: number): string {
  if (n === 0) {
    return smalls[n];
  } else if (n < 0) {
    // tslint:disable-next-line
    return 'negative ' + englishInt(Math.abs(n));
  }

  const parts = [];
  let chunkCount = 0;

  while (n > 0) {
    // incase of n = 1_000_000 we dont want to push thousand into part
    if (n % 1000 !== 0) {
      // tslint:disable-next-line
      chunkCount > 0 && parts.unshift(bigs[chunkCount]);
      parts.unshift(convertChunk(n % 1000));
    }

    // tslint:disable-next-line
    n = Math.floor(n / 1000);
    chunkCount += 1;
  }

  return parts.join(' ');
}

function convertChunk(n: number): string {
  // inside here n is from 0 to 999
  const parts = [];

  // process hundred part
  if (n >= 100) {
    parts.push(smalls[Math.floor(n / 100)]);
    parts.push('hundred');

    // tslint:disable-next-line
    n %= 100;
  }

  // process tens digit
  if (n >= 20) {
    parts.push(tens[Math.floor(n / 10)]);

    // tslint:disable-next-line
    n %= 10;
  } else if (n >= 10 && n <= 19) {
    parts.push(smalls[n]);
  }

  // n from 0 to 9 but we dont want to push zero
  if (n >= 1 && n <= 9) {
    parts.push(smalls[n]);
  }

  return parts.join(' ');
}

export { englishInt };
