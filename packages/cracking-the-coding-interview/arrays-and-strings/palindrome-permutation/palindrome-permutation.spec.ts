/**
 * Test specs for palindrome-permutation problem
 * PalindromePermutation
 */

import * as ut from '@challenges/util';

import { palindromePermutation } from './palindrome-permutation';
import * as fixture from './palindrome-permutation.fixture.json';

describe('CrackingTheCodingInterview - PalindromePermutation', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<string, boolean>)
    .executeTests(
      palindromePermutation
    );
});
