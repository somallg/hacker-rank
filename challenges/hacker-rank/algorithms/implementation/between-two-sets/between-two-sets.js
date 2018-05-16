/**
 * @url https://www.hackerrank.com/challenges/between-two-sets/problem
 */

function getTotalX(a, b) {
  // Complete this function
  const maxA = Math.max.apply(null, a);
  const minB = Math.min.apply(null, b);

  if (minB < maxA) {
    return 0;
  }

  return Array(...{ length: minB - maxA + 1 })
    .map((_, i) => i + maxA)
    .filter(
      e => a.every(eleA => e % eleA === 0) && b.every(eleB => eleB % e === 0)
    ).length;
}

export { getTotalX };
