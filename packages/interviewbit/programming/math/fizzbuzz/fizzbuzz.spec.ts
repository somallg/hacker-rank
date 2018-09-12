/**
 * Test specs for fizzbuzz problem
 * Fizzbuzz
 */
import * as ut from '@challenges/util';

import { fizzbuzz } from './fizzbuzz';
import * as fixture from './fizzbuzz.fixture.json';

describe('Interviewbit - Fizzbuzz', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number, string[]>)
    .executeTests(fizzbuzz, ut.identityf);
});
