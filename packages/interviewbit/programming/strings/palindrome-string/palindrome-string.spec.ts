/**
 * Test specs for palindrome-string problem
 * PalindromeString
 */
import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { palindromeString } from './palindrome-string';
import * as fixture from './palindrome-string.fixture.json';

describe('Interviewbit - PalindromeString', () => {
  createTestExecutor(<TestFixture<string, number>>fixture).executeTests(
    palindromeString,
    generateString
  );
});
