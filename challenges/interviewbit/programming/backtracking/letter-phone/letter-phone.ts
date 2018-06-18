/**
 * Interviewbit - LetterPhone
 */

function letterPhone(letter: string): string[] {
  const mapping: string[][] = [
    ['0'],
    ['1'],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ];

  const l = letter.length;
  const result: string[] = [];

  const letterPhoneRec = (currentIndex: number, soFar: string): void => {
    if (soFar.length === l) {
      result.push(soFar);
      return;
    }

    mapping[+letter[currentIndex]].forEach(possibleLetter =>
      letterPhoneRec(currentIndex + 1, `${soFar}${possibleLetter}`)
    );
  };

  letterPhoneRec(0, '');

  return result;
}

export { letterPhone };
