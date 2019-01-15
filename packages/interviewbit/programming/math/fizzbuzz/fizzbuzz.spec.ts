/**
 * Test specs for fizzbuzz problem
 * Fizzbuzz
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { fizzbuzz } from './fizzbuzz';
import * as fixture from './fizzbuzz.fixture.json';

describe('Interviewbit - Fizzbuzz', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number, string[]>>fixture)
    .executeTests(fizzbuzz, identityf);
});
