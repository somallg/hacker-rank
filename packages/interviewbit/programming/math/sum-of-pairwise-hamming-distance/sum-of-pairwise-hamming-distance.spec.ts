/**
 * Test specs for sum-of-pairwise-hamming-distance problem
 * SumOfPairwiseHammingDistance
 */

import * as ut from '@challenges/util';

import { sumOfPairwiseHammingDistance } from './sum-of-pairwise-hamming-distance';
import * as fixture from './sum-of-pairwise-hamming-distance.fixture.json';

describe('Interviewbit - SumOfPairwiseHammingDistance', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], number>)
    .executeTests(
      sumOfPairwiseHammingDistance,
      ut.generateArray
  );
});
