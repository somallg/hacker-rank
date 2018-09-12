/**
 * Test specs for palindrome-integer problem
 * Interviewbit - PalindromeInteger
 */

import * as ut from '@challenges/util';

import { palindromeInteger } from './palindrome-integer';
import * as fixture from './palindrome-integer.fixture.json';

describe('Interviewbit - PalindromeInteger', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<number, number>).executeTests(
    palindromeInteger,
    ut.identityf
  );
});
