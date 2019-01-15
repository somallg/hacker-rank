/**
 * Test specs for rotate-matrix problem
 * Interviewbit - RotateMatrix
 */

import {
  createTestExecutor,
  generateMatrix,
  TestFixture
} from '@challenges/util';

import { rotateMatrix } from './rotate-matrix';
import * as fixture from './rotate-matrix.fixture.json';

describe('Interviewbit - RotateMatrix', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[][], number[][]>> fixture)
    .executeTests(rotateMatrix, generateMatrix);
});
