/**
 * Test specs for palindrome-string problem
 * PalindromeString
 */

import * as ut from '@challenges/util';

import { palindromeString } from './palindrome-string';

import * as fixture from './palindrome-string.fixture.json';

describe('Interviewbit - PalindromeString', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<string, number>)
    .executeTests(
      palindromeString,
      ut.generateString
    );
});
