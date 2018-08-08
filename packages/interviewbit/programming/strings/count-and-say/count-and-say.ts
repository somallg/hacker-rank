/**
 * CountAndSay
 */

function countAndSayString(s: string): string {
  const l = s.length;
  let result = '';
  let i = 0;

  while (i < l) {
    let j = i;
    while (j < l && s[j] === s[i]) {
      j += 1;
    }

    result = `${result}${j - i}${s[i]}`;

    i = j;
  }

  return result;
}

function countAndSay(n: number): string {
  if (n <= 0) {
    return '';
  }
  const dp = ['1'];

  for (let i = 1; i < n; i += 1) {
    dp[i] = countAndSayString(dp[i - 1]);
  }

  return dp[n - 1];
}

export { countAndSay };
