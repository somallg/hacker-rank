/**
 * Test specs for n3-repeat-number problem
 * Interviewbit - N3RepeatNumber
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { n3RepeatNumber } from './n3-repeat-number';
import * as fixture from './n3-repeat-number.fixture.json';

describe('Interviewbit - N3RepeatNumber', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[], number>> fixture)
    .executeTests(n3RepeatNumber, generateArray);
});
