/**
 * Test specs for sorted-permutation-rank-with-repeats problem
 * SortedPermutationRankWithRepeats
 */

import * as ut from '@challenges/util';

import { sortedPermutationRankWithRepeats } from './sorted-permutation-rank-with-repeats';
import * as fixture from './sorted-permutation-rank-with-repeats.fixture.json';

describe('Interviewbit - SortedPermutationRankWithRepeats', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<string, number>).executeTests(
    sortedPermutationRankWithRepeats,
    ut.generateString
  );
});
