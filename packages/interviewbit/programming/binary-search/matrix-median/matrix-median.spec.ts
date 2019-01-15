/**
 * Test specs for matrix-median problem
 * MatrixMedian
 */

import {
  createTestExecutor,
  generateMatrix,
  TestFixture
} from '@challenges/util';

import { matrixMedian } from './matrix-median';
import * as fixture from './matrix-median.fixture.json';

describe('Interviewbit - MatrixMedian', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[][], number>>fixture)
    .executeTests(matrixMedian, generateMatrix);
});
