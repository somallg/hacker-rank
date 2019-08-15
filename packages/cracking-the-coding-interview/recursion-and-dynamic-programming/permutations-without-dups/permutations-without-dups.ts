/**
 * PermutationsWithoutDups
 */

function permutationsOfFirstN(s: string): string[] {
  const permutations: string[] = [];

  if (s.length === 0) {
    permutations.push('');

    return permutations;
  }

  const lastChar: string = s.charAt(s.length - 1);
  const remainder: string = s.substr(0, s.length - 1);

  const words: string[] = permutationsOfFirstN(remainder);

  for (const w of words) {
    insertCharToEveryIndexOfWord(lastChar, w, permutations);
  }

  return permutations;
}

function insertCharToEveryIndexOfWord(
  c: string,
  w: string,
  permutations: string[]
): string[] {
  for (let i: number = w.length; i >= 0; i -= 1) {
    const head: string = w.substr(0, i);
    const tail: string = w.substr(i);

    permutations.push(`${head}${c}${tail}`);
  }

  return permutations;
}

export { permutationsOfFirstN };
