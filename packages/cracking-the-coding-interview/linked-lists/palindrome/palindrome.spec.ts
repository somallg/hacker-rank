/**
 * Test specs for palindrome problem
 * Palindrome
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { palindrome } from './palindrome';
import * as fixture from './palindrome.fixture.json';

describe('CrackingTheCodingInterview - Palindrome', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[], boolean>> fixture)
    .executeTests(
      palindrome
    );
});
