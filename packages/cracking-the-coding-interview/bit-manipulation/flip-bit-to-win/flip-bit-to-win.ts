/**
 * FlipBitToWin
 */

const NUMBER_OF_BITS: number = 32;

function flipBitToWin(n: number): number {
  if (n === -1) {
    return NUMBER_OF_BITS;
  }

  const sequences: number[] = getAlternatingSequences(n);

  return findLongestSequences(sequences);
}

function getAlternatingSequences(n: number): number[] {
  const sequences: number[] = [];

  let searchingFor: number = 0;
  let counter: number = 0;

  for (let i: number = 0; i < NUMBER_OF_BITS; i += 1) {
    if ((n & 1) !== searchingFor) {
      searchingFor = n & 1;
      sequences.push(counter);
      counter = 0;
    }
    counter += 1;
    // tslint:disable-next-line
    n >>= 1;
  }

  return sequences;
}

function findLongestSequences(sequences: number[]): number {
  let maxSeq: number = 0;

  for (let i: number = 0; i < sequences.length; i += 2) {
    const zerosSeq: number = sequences[i];
    const onesSeqLeft: number = i - 1 > 0 ? sequences[i - 1] : 0;
    const onesSeqRight: number =
      i + 1 < sequences.length ? sequences[i + 1] : 0;

    let thisSeq: number = 0;
    if (zerosSeq === 1) {
      thisSeq = onesSeqLeft + 1 + onesSeqRight;
    } else if (zerosSeq > 1) {
      thisSeq = Math.max(onesSeqLeft, onesSeqRight) + 1;
    } else {
      thisSeq = Math.max(onesSeqLeft, onesSeqRight);
    }
    maxSeq = Math.max(maxSeq, thisSeq);
  }

  return maxSeq;
}

export { flipBitToWin };
