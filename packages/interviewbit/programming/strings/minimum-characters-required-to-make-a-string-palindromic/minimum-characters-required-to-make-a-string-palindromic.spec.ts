/**
 * Test specs for minimum-characters-required-to-make-a-string-palindromic problem
 * MinimumCharactersRequiredToMakeAStringPalindromic
 */

import * as ut from '@challenges/util';

import { minimumCharactersRequiredToMakeAStringPalindromic } from './minimum-characters-required-to-make-a-string-palindromic';
import * as fixture from './minimum-characters-required-to-make-a-string-palindromic.fixture.json';

describe('Interviewbit - MinimumCharactersRequiredToMakeAStringPalindromic', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<string, number>).executeTests(
    minimumCharactersRequiredToMakeAStringPalindromic,
    ut.generateString
  );
});
