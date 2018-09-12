/**
 * Test specs for longest-increasing-subsequence problem
 * LongestIncreasingSubsequence
 */

import * as ut from '@challenges/util';

import { longestIncreasingSubsequence } from './longest-increasing-subsequence';

import * as fixture from './longest-increasing-subsequence.fixture.json';
const testFixture = fixture as ut.TestFixture<number[], number>;

describe('Interviewbit - LongestIncreasingSubsequence', () => {
  ut.createTestExecutor(testFixture).executeTests(
    longestIncreasingSubsequence,
    ut.generateArray
  );
});
