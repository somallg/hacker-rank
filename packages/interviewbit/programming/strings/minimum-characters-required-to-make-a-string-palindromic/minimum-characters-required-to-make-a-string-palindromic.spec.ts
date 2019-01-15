/**
 * Test specs for minimum-characters-required-to-make-a-string-palindromic problem
 * MinimumCharactersRequiredToMakeAStringPalindromic
 */
import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { minimumCharactersRequiredToMakeAStringPalindromic } from './minimum-characters-required-to-make-a-string-palindromic';
import * as fixture from './minimum-characters-required-to-make-a-string-palindromic.fixture.json';

describe('Interviewbit - MinimumCharactersRequiredToMakeAStringPalindromic', () => {
  createTestExecutor(<TestFixture<string, number>>fixture).executeTests(
    minimumCharactersRequiredToMakeAStringPalindromic,
    generateString
  );
});
