/**
 * Test specs for power-of-two-integers problem
 * PowerOfTwoIntegers
 */

import * as ut from '@challenges/util';

import { powerOfTwoIntegers } from './power-of-two-integers';
import * as fixture from './power-of-two-integers.fixture.json';

describe('Interviewbit - PowerOfTwoIntegers', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<number, number>).executeTests(
    powerOfTwoIntegers,
    ut.identityf
  );
});
