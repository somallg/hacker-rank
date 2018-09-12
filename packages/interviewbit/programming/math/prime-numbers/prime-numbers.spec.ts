/**
 * Test specs for prime-numbers problem
 * Interviewbit - PrimeNumbers
 */
import * as ut from '@challenges/util';

import { primeNumbers } from './prime-numbers';
import * as fixture from './prime-numbers.fixture.json';

describe('Interviewbit - PrimeNumbers', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number, number[]>)
    .executeTests(primeNumbers, ut.identityf);
});
