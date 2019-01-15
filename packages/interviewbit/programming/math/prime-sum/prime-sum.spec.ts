/**
 * Test specs for prime-sum problem
 * Interviewbit - PrimeSum
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { primeSum } from './prime-sum';
import * as fixture from './prime-sum.fixture.json';

describe('Interviewbit - PrimeSum', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number, number[]>>fixture).executeTests(
    primeSum,
    identityf
  );
});
