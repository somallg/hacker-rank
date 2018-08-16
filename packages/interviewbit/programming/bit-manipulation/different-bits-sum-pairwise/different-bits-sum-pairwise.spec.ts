/**
 * Test specs for different-bits-sum-pairwise problem
 * DifferentBitsSumPairwise
 */

import { createTestExecutor, Fixture, generateArray } from '@challenges/util';

import { differentBitsSumPairwise } from './different-bits-sum-pairwise';

import * as fixture from './different-bits-sum-pairwise.fixture.json';
const testFixture = fixture as Fixture<number[], number>;

describe('Interviewbit - DifferentBitsSumPairwise', () => {
  createTestExecutor<number[], number>(
    differentBitsSumPairwise.name,
    differentBitsSumPairwise,
    generateArray
  )(testFixture);
});
