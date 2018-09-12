/**
 * Test specs for reverse-integer problem
 * Interviewbit - ReverseInteger
 */
import * as ut from '@challenges/util';

import { reverseInteger } from './reverse-integer';
import * as fixture from './reverse-integer.fixture.json';

describe('Interviewbit - ReverseInteger', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<number, number>).executeTests(
    reverseInteger,
    ut.identityf
  );
});
