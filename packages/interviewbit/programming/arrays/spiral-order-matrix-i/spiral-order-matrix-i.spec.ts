/**
 * Test specs for spiral-order-matrix-i problem
 * Interviewbit - SpiralOrderMatrixI
 */

import {
  createTestExecutor,
  generateMatrix,
  TestFixture
} from '@challenges/util';

import { spiralOrderMatrixI } from './spiral-order-matrix-i';
import * as fixture from './spiral-order-matrix-i.fixture.json';

describe('Interviewbit - SpiralOrderMatrixI', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[][], number[]>> fixture)
    .executeTests(spiralOrderMatrixI, generateMatrix);
});
