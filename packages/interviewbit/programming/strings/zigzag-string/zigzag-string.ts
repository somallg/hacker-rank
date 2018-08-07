/**
 * ZigzagString
 */

const DOWN = 0;
const UP = 1;

function zigzagString(text: string, nRows: number): string {
  if (nRows <= 1) {
    return text;
  }
  const l = text.length;
  let result = '';

  for (let i = 0; i < nRows; i = i + 1) {
    let j = i;
    let direction = i < nRows - 1 ? DOWN : UP;
    while (j < l) {
      result = `${result}${text[j]}`;
      if (i === 0) {
        j += (nRows - i - 1) * 2;
      } else if (i === nRows - 1) {
        j += i * 2;
      } else {
        j += direction === DOWN ? (nRows - i - 1) * 2 : i * 2;
        direction = UP - direction;
      }
    }
  }

  return result;
}

export { zigzagString };
