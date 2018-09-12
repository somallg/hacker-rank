/**
 * Test specs for min-sum-path-in-matrix problem
 * MinSumPathInMatrix
 */

import * as ut from '@challenges/util';

import { minSumPathInMatrix } from './min-sum-path-in-matrix';

import * as fixture from './min-sum-path-in-matrix.fixture.json';
const testFixture = fixture as ut.TestFixture<number[][], number>;

describe('Interviewbit - MinSumPathInMatrix', () => {
  ut.createTestExecutor(testFixture).executeTests(
    minSumPathInMatrix,
    ut.generateMatrix
  );
});
