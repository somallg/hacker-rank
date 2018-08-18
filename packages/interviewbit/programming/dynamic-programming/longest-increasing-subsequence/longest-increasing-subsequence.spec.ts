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
const testFixture = fixture as TestFixture<number[], number>;

describe('Interviewbit - LongestIncreasingSubsequence', () => {
  createTestExecutor(testFixture)(
    longestIncreasingSubsequence.name,
    longestIncreasingSubsequence,
    generateArray
  );
});
