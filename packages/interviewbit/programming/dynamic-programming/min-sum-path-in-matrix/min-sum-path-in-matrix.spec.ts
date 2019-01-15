/**
 * Test specs for min-sum-path-in-matrix problem
 * MinSumPathInMatrix
 */

import {
  createTestExecutor,
  generateMatrix,
  TestFixture
} from '@challenges/util';

import { minSumPathInMatrix } from './min-sum-path-in-matrix';

import * as fixture from './min-sum-path-in-matrix.fixture.json';

describe('Interviewbit - MinSumPathInMatrix', () => {
  createTestExecutor(<TestFixture<number[][], number>>fixture).executeTests(
    minSumPathInMatrix,
    generateMatrix
  );
});
