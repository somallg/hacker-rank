/**
 * @url https://www.hackerrank.com/challenges/funny-string/problem
 */

export function funnyString(s: string): string {
  // Complete this function
  const r: string = s
    .split('')
    .reverse()
    .join('');

  const isFunny: boolean = checkFunnyString(s, r);

  if (isFunny) {
    return 'Funny';
  }

  return 'Not Funny';
}

export function checkFunnyString(s: string, r: string): boolean {
  let isFunny: boolean = true;

  for (let i: number = 0; i < s.length - 1; i = i + 1) {
    const isFunnyS: number = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    const isFunnyR: number = Math.abs(r.charCodeAt(i) - r.charCodeAt(i + 1));

    if (isFunnyS !== isFunnyR) {
      isFunny = false;
      break;
    }
  }

  return isFunny;
}
