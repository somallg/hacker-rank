/**
 * Test specs for prime-sum problem
 * Interviewbit - PrimeSum
 */

import * as ut from '@challenges/util';

import { primeSum } from './prime-sum';
import * as fixture from './prime-sum.fixture.json';

describe('Interviewbit - PrimeSum', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number, number[]>).executeTests(
    primeSum,
    ut.identityf
  );
});
