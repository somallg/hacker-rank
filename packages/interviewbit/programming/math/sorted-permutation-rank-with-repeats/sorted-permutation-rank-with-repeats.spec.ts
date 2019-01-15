/**
 * Test specs for sorted-permutation-rank-with-repeats problem
 * SortedPermutationRankWithRepeats
 */

import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { sortedPermutationRankWithRepeats } from './sorted-permutation-rank-with-repeats';
import * as fixture from './sorted-permutation-rank-with-repeats.fixture.json';

describe('Interviewbit - SortedPermutationRankWithRepeats', () => {
  createTestExecutor(<TestFixture<string, number>>fixture).executeTests(
    sortedPermutationRankWithRepeats,
    generateString
  );
});
