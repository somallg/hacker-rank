/**
 * Test specs for sum-of-pairwise-hamming-distance problem
 * SumOfPairwiseHammingDistance
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { sumOfPairwiseHammingDistance } from './sum-of-pairwise-hamming-distance';
import * as fixture from './sum-of-pairwise-hamming-distance.fixture.json';

describe('Interviewbit - SumOfPairwiseHammingDistance', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[], number>>fixture)
    .executeTests(
      sumOfPairwiseHammingDistance,
      generateArray
  );
});
