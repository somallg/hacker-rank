/**
 * Test specs for different-bits-sum-pairwise problem
 * DifferentBitsSumPairwise
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { differentBitsSumPairwise } from './different-bits-sum-pairwise';

import * as fixture from './different-bits-sum-pairwise.fixture.json';

describe('Interviewbit - DifferentBitsSumPairwise', () => {
  createTestExecutor(<TestFixture<number[], number>>fixture).executeTests(
    differentBitsSumPairwise,
    generateArray
  );
});
