/**
 * OneAway
 */

function oneEditReplace(first: string, second: string): boolean {
  let foundDiff: boolean = false;

  for (let i: number = 0; i < first.length; i += 1) {
    if (first[i] !== second[i]) {
      if (foundDiff) {
        return false;
      }

      foundDiff = true;
    }
  }

  return true;
}

function oneEditInsert(first: string, second: string): boolean {
  let index1: number = 0;
  let index2: number = 0;

  while (index2 < second.length && index1 < first.length) {
    if (first[index1] !== second[index2]) {
      if (index1 !== index2) {
        return false;
      }
      index2 += 1;
    } else {
      index1 += 1;
      index2 += 1;
    }
  }

  return true;
}

function oneAway(first: string, second: string): boolean {
  if (first.length === second.length) {
    return oneEditReplace(first, second);
  } else if (first.length === second.length - 1) {
    return oneEditInsert(first, second);
  } else if (first.length === second.length + 1) {
    return oneEditInsert(second, first);
  }

  return false;
}

export { oneAway };
