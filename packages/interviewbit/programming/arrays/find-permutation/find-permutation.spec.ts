/**
 * Test specs for find-permutation problem
 * Interviewbit - FindPermutation
 */

import * as ut from '@challenges/util';

import { findPermutation } from './find-permutation';
import * as fixture from './find-permutation.fixture.json';

describe('Interviewbit - FindPermutation', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[string, number], number[]>)
    .executeTests(([s, n]) => findPermutation(s, n), inputSize => [ut.generateString(inputSize), inputSize]);
});
