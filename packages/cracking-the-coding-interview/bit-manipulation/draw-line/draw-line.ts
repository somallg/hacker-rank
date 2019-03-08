/**
 * DrawLine
 */

function drawLine(
  screen: number[],
  w: number,
  x1: number,
  x2: number,
  y: number
): number[] {
  const startOffset: number = x1 % 8;
  let startFullByte: number = Math.floor(x1 / 8);

  if (startOffset !== 0) {
    startFullByte += 1;
  }

  const endOffset: number = x2 % 8;
  let endFullByte: number = Math.floor(x2 / 8);

  if (endOffset !== 7) {
    endFullByte -= 1;
  }

  for (let b: number = startFullByte; b <= endFullByte; b += 1) {
    screen[(w / 8) * y + b] = 0xff;
  }

  const startMask: number = (0xff >>> startOffset) & 0xff;
  const endMask: number = ~(0xff >>> (endOffset + 1)) & 0xff;

  if (Math.floor(x1 / 8) === Math.floor(x2 / 8)) {
    // x1 and x2 are in same byte
    const mask: number = startMask & endMask;
    screen[(w / 8) * y + Math.floor(x1 / 8)] |= mask;
  } else {
    if (startOffset !== 0) {
      screen[(w / 8) * y + startFullByte - 1] |= startMask;
    }

    if (endOffset !== 7) {
      screen[(w / 8) * y + endFullByte + 1] |= endMask;
    }
  }

  return screen;
}

export { drawLine };
