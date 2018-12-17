/**
 * StringRotation
 */

function stringRotation(s1: string, s2: string): boolean {
  return s1.repeat(2).includes(s2);
}

export { stringRotation };
