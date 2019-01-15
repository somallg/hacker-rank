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

type Input = [number[], number, number];
type Output = number;

describe('Interviewbit - NumbersOfLengthNAndValueLessThanK', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>>fixture)
    .executeTests(
      ([sets, n, k]: Input) => numbersOfLengthNAndValueLessThanK(sets, n, k),
      numbersOfLengthNAndValueLessThanK.name,
      (inputSize: number) => [generateArray(inputSize, 10), 9, 1e9]
    );
});
