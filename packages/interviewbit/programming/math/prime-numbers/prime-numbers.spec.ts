/**
 * Test specs for prime-numbers problem
 * Interviewbit - PrimeNumbers
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { primeNumbers } from './prime-numbers';
import * as fixture from './prime-numbers.fixture.json';

describe('Interviewbit - PrimeNumbers', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number, number[]>>fixture)
    .executeTests(primeNumbers, identityf);
});
