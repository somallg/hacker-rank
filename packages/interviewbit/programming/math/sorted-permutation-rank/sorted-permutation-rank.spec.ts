/**
 * Test specs for sorted-permutation-rank problem
 * SortedPermutationRank
 */

import * as ut from '@challenges/util';

import { sortedPermutationRank } from './sorted-permutation-rank';
import * as fixture from './sorted-permutation-rank.fixture.json';

describe('Interviewbit - SortedPermutationRank', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<string, number>).executeTests(
    sortedPermutationRank,
    ut.generateString
  );
});
