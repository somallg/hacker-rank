/**
 */

import { Stack } from '../stack';

const UP_STREAM: number = 0;
const DOWN_STREAM: number = 1;

interface Fish {
  size: number;
  direction: number;
}

function solveFish(sizes: number[], directions: number[]): number {
  const downstreamStack: Stack<Fish> = new Stack<Fish>();
  let count: number = sizes.length;

  directions.forEach((direction: number, index: number) => {
    const currentFish: Fish = {
      direction,
      size: sizes[index]
    };

    // tslint:disable-next-line
    direction === DOWN_STREAM && downstreamStack.push(currentFish);
    while (downstreamStack.length && direction === UP_STREAM) {
      // currentFish is upstream fish
      // it will meet another downstream fish (if any)
      // and after that the bigger fish survive
      // the number of fish will always be decremented by 1
      count = count - 1;
      const downstreamFish: Fish = downstreamStack.pop();
      if (downstreamFish.size > currentFish.size) {
        // currentFish got eaten by downStream
        downstreamStack.push(downstreamFish);
        break;
      }
    }
  });

  return count;
}

export { solveFish };
