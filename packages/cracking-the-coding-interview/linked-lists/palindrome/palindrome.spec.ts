/**
 * Test specs for palindrome problem
 * Palindrome
 */

import * as ut from '@challenges/util';

import { palindrome } from './palindrome';
import * as fixture from './palindrome.fixture.json';

describe('CrackingTheCodingInterview - Palindrome', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], boolean>)
    .executeTests(
      palindrome
    );
});
