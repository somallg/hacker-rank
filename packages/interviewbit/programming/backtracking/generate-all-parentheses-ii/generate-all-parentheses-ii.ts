/**
 * Interviewbit - GenerateAllParenthesesIi
 */

function generateAllParenthesesIi(n: number): string[] {
  function generate(
    nbOpeningParen: number,
    nbClosingParen: number,
    soFar: string
  ): void {
    if (
      nbOpeningParen + nbClosingParen === n * 2 &&
      nbOpeningParen === nbClosingParen
    ) {
      result.push(soFar);
      return;
    }

    if (nbOpeningParen < n) {
      generate(nbOpeningParen + 1, nbClosingParen, `${soFar}(`);
    }

    if (nbClosingParen < nbOpeningParen && nbClosingParen < n) {
      generate(nbOpeningParen, nbClosingParen + 1, `${soFar})`);
    }
  }

  const result: string[] = [];
  if (n === 0) {
    return result;
  }
  generate(0, 0, '');

  return result;
}

export { generateAllParenthesesIi };
