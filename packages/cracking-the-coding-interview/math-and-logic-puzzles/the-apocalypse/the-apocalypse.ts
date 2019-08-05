/**
 * TheApocalypse
 */

function theApocalypse(n: number): number {
  let boys: number = 0;
  let girls: number = 0;

  for (let i: number = 0; i < n; i += 1) {
    const [nbGirl, nbBoy]: [number, number] = runOneFamily();
    girls += nbGirl;
    boys += nbBoy;
  }

  return girls / (boys + girls);
}

function runOneFamily(): [number, number] {
  let boys: number = 0;
  let girls: number = 0;

  while (girls === 0) {
    // tslint:disable-next-line
    if (Math.random() < 0.5) {
      // got a girl
      girls += 1;
    }
    boys += 1;
  }

  return [girls, boys];
}

export { theApocalypse };
