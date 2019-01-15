/**
 * Test specs for reverse-integer problem
 * Interviewbit - ReverseInteger
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { reverseInteger } from './reverse-integer';
import * as fixture from './reverse-integer.fixture.json';

describe('Interviewbit - ReverseInteger', () => {
  createTestExecutor(<TestFixture<number, number>>fixture).executeTests(
    reverseInteger,
    identityf
  );
});
