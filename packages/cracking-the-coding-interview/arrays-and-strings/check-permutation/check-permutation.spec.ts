/**
 * Test specs for check-permutation problem
 * CheckPermutation
 */

import * as ut from '@challenges/util';

import { checkPermutation } from './check-permutation';
import * as fixture from './check-permutation.fixture.json';

describe('CrackingTheCodingInterview - CheckPermutation', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[string, string], boolean>)
    .executeTests(
      ([s, t]) => checkPermutation(s, t),
      (inputSize) => [ut.generateString(inputSize), ut.generateString(inputSize)]);
});
