/**
 * Test specs for next-permutation problem
 * Interviewbit - NextPermutation
 */

import * as ut from '@challenges/util';

import { nextPermutation } from './next-permutation';
import * as fixture from './next-permutation.fixture.json';

describe('Interviewbit - NextPermutation', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], number[]>)
    .executeTests(nextPermutation, ut.generateArray);
});
