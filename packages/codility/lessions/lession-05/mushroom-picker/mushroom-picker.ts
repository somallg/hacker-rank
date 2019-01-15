/**
 */

import { countTotal, prefixSums } from '../prefix-sums';

function solveMushroomPicker(
  mushrooms: number[],
  pickerPosition: number, // picker position
  moves: number // number of moves
): number {
  const n: number = mushrooms.length;
  const prefS: number[] = prefixSums(mushrooms);
  let result: number = 0;

  for (let p: number = 0; p < Math.min(moves, pickerPosition) + 1; p = p + 1) {
    const leftPos: number = pickerPosition - p;
    const rightPos: number = Math.min(
      n - 1,
      Math.max(pickerPosition, pickerPosition + moves - p * 2)
    );
    result = Math.max(result, countTotal(prefS, leftPos, rightPos));
  }

  for (
    let p: number = 0;
    p < Math.min(moves + 1, n - pickerPosition);
    p = p + 1
  ) {
    const rightPos: number = pickerPosition + p;
    const leftPos: number = Math.max(
      0,
      Math.min(pickerPosition, pickerPosition - (moves - p * 2))
    );

    result = Math.max(result, countTotal(prefS, leftPos, rightPos));
  }

  return result;
}

export { solveMushroomPicker };
