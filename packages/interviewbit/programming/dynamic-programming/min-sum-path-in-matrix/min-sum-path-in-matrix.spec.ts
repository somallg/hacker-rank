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
const testFixture = fixture as TestFixture<number[][], number>;

describe('Interviewbit - MinSumPathInMatrix', () => {
  createTestExecutor(testFixture)(
    minSumPathInMatrix.name,
    minSumPathInMatrix,
    generateMatrix
  );
});
