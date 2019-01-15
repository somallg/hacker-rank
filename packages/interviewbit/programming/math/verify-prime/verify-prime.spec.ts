/**
 * Test specs for verify-prime problem
 * Interviewbit - VerifyPrime
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { verifyPrime } from './verify-prime';
import * as fixture from './verify-prime.fixture.json';

describe('Interviewbit - VerifyPrime', () => {
  createTestExecutor(<TestFixture<number, number>>fixture).executeTests(
    verifyPrime
  );
});
