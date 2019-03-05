/**
 * Test specs for pairwise-swap problem
 * PairwiseSwap
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { pairwiseSwap } from './pairwise-swap';
import * as fixture from './pairwise-swap.fixture.json';

describe('CrackingTheCodingInterview - PairwiseSwap', () => {
  createTestExecutor(<TestFixture<number, number>>fixture).executeTests(
    pairwiseSwap
  );
});
