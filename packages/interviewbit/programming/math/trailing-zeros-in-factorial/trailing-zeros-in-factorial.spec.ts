/**
 * Test specs for trailing-zeros-in-factorial problem
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { trailingZerosInFactorial } from './trailing-zeros-in-factorial';
import * as fixture from './trailing-zeros-in-factorial.fixture.json';

describe('Interviewbit - TrailingZerosInFactorial', () => {
  createTestExecutor(<TestFixture<number, number>>fixture).executeTests(
    trailingZerosInFactorial,
    identityf
  );
});
