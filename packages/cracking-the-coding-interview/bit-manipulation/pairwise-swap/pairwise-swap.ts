/**
 * PairwiseSwap
 */

const ODD_BITS: number = 0b10101010101010101010101010101010;
const EVEN_BITS: number = 0b01010101010101010101010101010101;

function pairwiseSwap(n: number): number {
  return ((n & ODD_BITS) >>> 1) | ((n & EVEN_BITS) << 1);
}

export { pairwiseSwap };
