/**
 * Test specs for numbers-of-length-n-and-value-less-than-k problem
 * NumbersOfLengthNAndValueLessThanK
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { numbersOfLengthNAndValueLessThanK } from './numbers-of-length-n-and-value-less-than-k';
import * as fixture from './numbers-of-length-n-and-value-less-than-k.fixture.json';
const testFixture = fixture as TestFixture<[number[], number, number], number>;

describe('Interviewbit - NumbersOfLengthNAndValueLessThanK', () => {
  describe('numbersOfLengthNAndValueLessThanK', () => {
    createTestExecutor(testFixture)(
      numbersOfLengthNAndValueLessThanK.name,
      ([sets, n, k]) => numbersOfLengthNAndValueLessThanK(sets, n, k),
      inputSize => [generateArray(inputSize, 10), 9, 1e9]
    );
  });
});
