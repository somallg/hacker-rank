/**
 * Test specs for roman-to-integer problem
 * RomanToInteger
 */

import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { romanToInteger } from './roman-to-integer';
import * as fixture from './roman-to-integer.fixture.json';

describe('Interviewbit - RomanToInteger', () => {
  createTestExecutor(<TestFixture<string, number>>fixture).executeTests(
    romanToInteger,
    (inputSize: number) => generateString(inputSize, 'I')
  );
});
