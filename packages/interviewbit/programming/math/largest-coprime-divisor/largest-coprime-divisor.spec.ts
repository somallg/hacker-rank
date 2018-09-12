/**
 * Test specs for largest-coprime-divisor problem
 * LargestCoprimeDivisor
 */

import * as ut from '@challenges/util';

import { largestCoprimeDivisor } from './largest-coprime-divisor';
import * as fixture from './largest-coprime-divisor.fixture.json';

describe('Interviewbit - LargestCoprimeDivisor', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number, number], number>)
    .executeTests(
      ([a, b]) => largestCoprimeDivisor(a, b),
      largestCoprimeDivisor.name,
      inputSize => [
        Math.floor(Math.random() * inputSize) + 1,
        Math.floor(Math.random() * inputSize) + 1
      ]
  );
});
