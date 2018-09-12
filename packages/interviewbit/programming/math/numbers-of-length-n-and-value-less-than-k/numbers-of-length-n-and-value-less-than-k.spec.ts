/**
 * Test specs for numbers-of-length-n-and-value-less-than-k problem
 * NumbersOfLengthNAndValueLessThanK
 */

import * as ut from '@challenges/util';

import { numbersOfLengthNAndValueLessThanK } from './numbers-of-length-n-and-value-less-than-k';
import * as fixture from './numbers-of-length-n-and-value-less-than-k.fixture.json';

describe('Interviewbit - NumbersOfLengthNAndValueLessThanK', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number[], number, number], number>)
    .executeTests(
      ([sets, n, k]) => numbersOfLengthNAndValueLessThanK(sets, n, k),
      numbersOfLengthNAndValueLessThanK.name,
      inputSize => [ut.generateArray(inputSize, 10), 9, 1e9]
    );
});
