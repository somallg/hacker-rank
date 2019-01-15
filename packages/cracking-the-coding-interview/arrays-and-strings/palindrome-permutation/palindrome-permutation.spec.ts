/**
 * Test specs for palindrome-permutation problem
 * PalindromePermutation
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { palindromePermutation } from './palindrome-permutation';
import * as fixture from './palindrome-permutation.fixture.json';

describe('CrackingTheCodingInterview - PalindromePermutation', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<string, boolean>> fixture)
    .executeTests(
      palindromePermutation
    );
});
