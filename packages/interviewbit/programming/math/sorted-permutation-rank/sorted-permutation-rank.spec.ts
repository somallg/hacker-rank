/**
 * Test specs for sorted-permutation-rank problem
 * SortedPermutationRank
 */

import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { sortedPermutationRank } from './sorted-permutation-rank';
import * as fixture from './sorted-permutation-rank.fixture.json';

describe('Interviewbit - SortedPermutationRank', () => {
  createTestExecutor(<TestFixture<string, number>>fixture).executeTests(
    sortedPermutationRank,
    generateString
  );
});
