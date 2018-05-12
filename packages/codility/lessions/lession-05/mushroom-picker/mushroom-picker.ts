import { prefixSums, countTotal } from '../prefix-sums';

/**
 */
const max = Math.max.bind(Math);
const min = Math.min.bind(Math);

function solveMushroomPicker(
  mushrooms: number[],
  pickerPosition: number, // picker position
  moves: number // number of moves
): number {
  const n = mushrooms.length;
  const prefS = prefixSums(mushrooms);
  let result = 0;

  for (let p = 0; p < min(moves, pickerPosition) + 1; p = p + 1) {
    const leftPos = pickerPosition - p;
    const rightPos = min(
      n - 1,
      max(pickerPosition, pickerPosition + moves - 2 * p)
    );
    result = max(result, countTotal(prefS, leftPos, rightPos));
  }

  for (let p = 0; p < min(moves + 1, n - pickerPosition); p = p + 1) {
    const rightPos = pickerPosition + p;
    const leftPos = max(
      0,
      min(pickerPosition, pickerPosition - (moves - 2 * p))
    );

    result = max(result, countTotal(prefS, leftPos, rightPos));
  }

  return result;
}

export { solveMushroomPicker };
