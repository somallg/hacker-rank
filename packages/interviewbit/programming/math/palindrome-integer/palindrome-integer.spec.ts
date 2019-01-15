/**
 * Test specs for palindrome-integer problem
 * Interviewbit - PalindromeInteger
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { palindromeInteger } from './palindrome-integer';
import * as fixture from './palindrome-integer.fixture.json';

describe('Interviewbit - PalindromeInteger', () => {
  createTestExecutor(<TestFixture<number, number>>fixture).executeTests(
    palindromeInteger,
    identityf
  );
});
