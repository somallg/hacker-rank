/**
 * Test specs for matrix-median problem
 * MatrixMedian
 */

import * as ut from '@challenges/util';

import { matrixMedian } from './matrix-median';
import * as fixture from './matrix-median.fixture.json';

describe('Interviewbit - MatrixMedian', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[][], number>)
    .executeTests(matrixMedian, ut.generateMatrix);
});
