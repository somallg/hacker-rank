/**
 * Test specs for verify-prime problem
 * Interviewbit - VerifyPrime
 */

import * as ut from '@challenges/util';

import { verifyPrime } from './verify-prime';
import * as fixture from './verify-prime.fixture.json';

describe('Interviewbit - VerifyPrime', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<number, number>).executeTests(
    verifyPrime,
    ut.identityf
  );
});
