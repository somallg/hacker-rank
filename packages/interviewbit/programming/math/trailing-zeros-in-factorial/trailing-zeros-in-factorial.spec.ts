/**
 * Test specs for trailing-zeros-in-factorial problem
 */

import * as ut from '@challenges/util';

import { trailingZerosInFactorial } from './trailing-zeros-in-factorial';
import * as fixture from './trailing-zeros-in-factorial.fixture.json';

describe('Interviewbit - TrailingZerosInFactorial', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<number, number>).executeTests(
    trailingZerosInFactorial,
    ut.identityf
  );
});
