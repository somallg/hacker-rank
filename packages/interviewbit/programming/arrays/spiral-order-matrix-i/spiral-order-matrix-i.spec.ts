/**
 * Test specs for spiral-order-matrix-i problem
 * Interviewbit - SpiralOrderMatrixI
 */

import * as ut from '@challenges/util';

import { spiralOrderMatrixI } from './spiral-order-matrix-i';
import * as fixture from './spiral-order-matrix-i.fixture.json';

describe('Interviewbit - SpiralOrderMatrixI', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[][], number[]>)
    .executeTests(spiralOrderMatrixI, ut.generateMatrix);
});
