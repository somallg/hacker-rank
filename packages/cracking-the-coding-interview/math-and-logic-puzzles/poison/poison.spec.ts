/**
 * Test specs for poison problem
 * Poison
 */

import { findPoisonedBottle } from './poison';

describe('CrackingTheCodingInterview - Poison', () => {
  // prettier-ignore
  // @ts-ignore
  it('should return at most 28', () => {
    expect(findPoisonedBottle()).toBeLessThanOrEqual(28);
  })
});
