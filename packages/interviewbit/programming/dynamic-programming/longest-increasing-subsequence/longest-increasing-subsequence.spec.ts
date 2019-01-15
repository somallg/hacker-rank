/**
 * Test specs for longest-increasing-subsequence problem
 * LongestIncreasingSubsequence
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { longestIncreasingSubsequence } from './longest-increasing-subsequence';

import * as fixture from './longest-increasing-subsequence.fixture.json';

describe('Interviewbit - LongestIncreasingSubsequence', () => {
  createTestExecutor(<TestFixture<number[], number>>fixture).executeTests(
    longestIncreasingSubsequence,
    generateArray
  );
});
