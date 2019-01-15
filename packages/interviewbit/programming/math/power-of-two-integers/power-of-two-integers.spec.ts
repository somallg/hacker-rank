/**
 * Test specs for power-of-two-integers problem
 * PowerOfTwoIntegers
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { powerOfTwoIntegers } from './power-of-two-integers';
import * as fixture from './power-of-two-integers.fixture.json';

describe('Interviewbit - PowerOfTwoIntegers', () => {
  createTestExecutor(<TestFixture<number, number>>fixture).executeTests(
    powerOfTwoIntegers,
    identityf
  );
});
