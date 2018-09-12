/**
 * Test specs for rotate-matrix problem
 * Interviewbit - RotateMatrix
 */

import * as ut from '@challenges/util';

import { rotateMatrix } from './rotate-matrix';
import * as fixture from './rotate-matrix.fixture.json';

describe('Interviewbit - RotateMatrix', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[][], number[][]>)
    .executeTests(rotateMatrix, ut.generateMatrix);
});
