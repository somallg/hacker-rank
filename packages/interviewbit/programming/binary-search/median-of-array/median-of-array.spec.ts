/**
 * Test specs for median-of-array problem
 * MedianOfArray
 */

import * as ut from '@challenges/util';

import { medianOfArray } from './median-of-array';
import * as fixture from './median-of-array.fixture.json';

describe('Interviewbit - MedianOfArray', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number[], number[]], number>)
    .executeTests(
      ([a, b]) => medianOfArray(a, b),
      medianOfArray.name,
      inputSize => [ut.generateArray(inputSize), ut.generateArray(inputSize)]);
});
