/**
 * Test specs for roman-to-integer problem
 * RomanToInteger
 */

import * as ut from '@challenges/util';

import { romanToInteger } from './roman-to-integer';

import * as fixture from './roman-to-integer.fixture.json';

describe('Interviewbit - RomanToInteger', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<string, number>).executeTests(
    romanToInteger,
    inputSize => ut.generateString(inputSize, 'I')
  );
});
