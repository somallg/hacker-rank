/**
 * Test specs for different-bits-sum-pairwise problem
 * DifferentBitsSumPairwise
 */

import * as ut from '@challenges/util';

import { differentBitsSumPairwise } from './different-bits-sum-pairwise';

import * as fixture from './different-bits-sum-pairwise.fixture.json';
const testFixture = fixture as ut.TestFixture<number[], number>;

describe('Interviewbit - DifferentBitsSumPairwise', () => {
  ut.createTestExecutor(testFixture).executeTests(
    differentBitsSumPairwise,
    ut.generateArray
  );
});
