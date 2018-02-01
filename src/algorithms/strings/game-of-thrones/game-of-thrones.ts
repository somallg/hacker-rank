/**
 * @url https://www.hackerrank.com/challenges/game-of-thrones/problem
 */
export function gameOfThrones(s: string) {
  // Complete this function
  const chars = s.split('').reduce((acc: any, e: string) => {
    acc[e] = acc[e] ? acc[e] + 1 : 1;
    return acc;
  }, {});

  const nbChars = Object.keys(chars).map((k: string) => chars[k]);

  const nbOdd = nbChars.filter((n: number) => n % 2 === 1).length;

  return nbOdd <= 1 ? 'YES' : 'NO';
}
