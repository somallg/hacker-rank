/**
 * Poison
 */

const DAYS_FOR_RESULT: number = 7;

interface Bottle {
  id: number;
  poisoned: boolean;
}

function findPoisonedBottle(): number {
  let bottles: Bottle[] = create1000Bottles();
  markRandomBottlePoisoned(bottles);

  let today: number = 0;
  let strips: number = 10;
  while (bottles.length > 1 && strips > 0) {
    const testStrips: Bottle[][] = groupBottlesByStrip(
      bottles,
      Math.ceil(bottles.length / strips)
    );
    today += DAYS_FOR_RESULT;
    strips -= 1;
    bottles = getPoisonedGroup(testStrips);
  }

  return today;
}

function create1000Bottles(): Bottle[] {
  const result: Bottle[] = [];

  for (let i: number = 0; i < 1000; i += 1) {
    result.push({ id: i, poisoned: false });
  }

  return result;
}

function markRandomBottlePoisoned(bottles: Bottle[]): void {
  const randomIndex: number = Math.floor(Math.random() * bottles.length);
  bottles[randomIndex].poisoned = true;
}

function groupBottlesByStrip(
  bottles: Bottle[],
  nbOfBottles: number
): Bottle[][] {
  return bottles.reduce((acc: Bottle[][], bottle: Bottle, index: number) => {
    const chunkIndex: number = Math.floor(index / nbOfBottles);

    if (acc[chunkIndex] === undefined) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(bottle);

    return acc;
  }, []);
}

function getPoisonedGroup(testStrips: Bottle[][]): Bottle[] {
  for (const bottles of testStrips) {
    if (bottles !== undefined && havePoison(bottles)) {
      return bottles;
    }
  }

  return [];
}

function havePoison(bottles: Bottle[]): boolean {
  return bottles.some((b: Bottle) => b.poisoned);
}

export { findPoisonedBottle };
