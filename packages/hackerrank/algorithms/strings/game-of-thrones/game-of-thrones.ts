/**
 * @url https://www.hackerrank.com/challenges/game-of-thrones/problem
 */

export function gameOfThrones(s: string): string {
  // Complete this function
  const chars: { [key: string]: number } = s
    .split('')
    .reduce((acc: {}, e: string) => {
      acc[e] = acc[e] ? acc[e] + 1 : 1;

      return acc;
    }, {});

  const nbChars: number[] = Object.keys(chars).map((k: string) => chars[k]);

  const nbOdd: number = nbChars.filter((n: number) => n % 2 === 1).length;

  return nbOdd <= 1 ? 'YES' : 'NO';
}
