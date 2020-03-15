/**
 * PondSizes
 */

enum LAND {
  WATER = 0,
  LAND = 1,
  VISITED = -1
}

type Land = number[][];

function pondSizes(land: Land) {
  const sizes: number[] = [];

  for (let i = 0; i < land.length; i += 1) {
    for (let j = 0; j < land[i].length; j += 1) {
      if (land[i][j] === LAND.WATER) {
        sizes.push(computePondSizes(land, i, j));
      }
    }
  }

  return sizes.length ? sizes : [0];
}

function computePondSizes(land: Land, row: number, col: number) {
  if (row < 0 || col < 0 || row >= land.length || col >= land[0].length || land[row][col] !== LAND.WATER) {
    return 0;
  }

  let size = 1;
  land[row][col] = LAND.VISITED;

  const neighboorOffset = getOffset();

  size += [...neighboorOffset].reduce((acc, [dr, dc]) => acc + computePondSizes(land, row + dr, col + dc), 0);

  return size;
}

function* getOffset() {
  for (let dr = -1; dr <= 1; dr += 1) {
    for (let dc = -1; dc <= 1; dc += 1) {
      yield [dr, dc];
    }
  }

  return [0, 0];
}

export { pondSizes };
