/**
 * Interviewbit - PalindromePartitioning
 */

function isPalindrome(s: string) {
  const l = s.length;
  const middle = Math.floor(l / 2);
  for (let i = 0; i < middle; i = i + 1) {
    if (s[i] !== s[l - 1 - i]) {
      return false;
    }
  }

  return true;
}

function palindromePartitioning(s: string): string[][] {
  const result: string[][] = [];

  const partition = (fromIndex: number, soFar: string[]): string[] => {
    if (fromIndex === s.length) {
      result.push(soFar.slice());
      return soFar;
    }

    for (let size = 1; size <= s.length - fromIndex; size = size + 1) {
      const partitionString = s.substr(fromIndex, size);
      if (isPalindrome(partitionString)) {
        soFar.push(partitionString);
        partition(fromIndex + size, soFar);
        soFar.pop();
      }
    }

    return soFar;
  };

  partition(0, []);

  return result;
}

export { palindromePartitioning };
