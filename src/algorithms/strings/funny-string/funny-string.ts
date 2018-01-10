/**
 * @url https://www.hackerrank.com/challenges/funny-string/problem
 */

export function funnyString(s: string): string {
  // Complete this function
  const r = s.split('').reverse().join('');

  const isFunny = checkFunnyString(s, r);

  if (isFunny) {
    return 'Funny';
  }

  return 'Not Funny';
}

export function checkFunnyString(s: string, r: string): boolean {
  let isFunny = true;

  for (let i = 0; i < s.length - 1; i = i + 1) {
    const isFunnyS = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    const isFunnyR = Math.abs(r.charCodeAt(i) - r.charCodeAt(i + 1));

    if (isFunnyS !== isFunnyR) {
      isFunny = false;
      break;
    }
  }

  return isFunny;
}

