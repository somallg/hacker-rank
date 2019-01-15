/**
 * Interviewbit - FindDuplicateInArray
 */

function findDuplicateInArray(array: number[]): number {
  const l: number = array.length;

  for (let i: number = 0; i < l; i = i + 1) {
    const index: number = Math.max(0, Math.abs(array[i]) - 1);
    if (array[index] < 0) {
      return Math.abs(array[index]);
    }

    array[index] = -array[index];
  }

  return -1;
}

export { findDuplicateInArray };
