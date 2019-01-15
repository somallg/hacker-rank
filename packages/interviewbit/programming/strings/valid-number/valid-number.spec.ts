/**
 * Test specs for valid-number problem
 * ValidNumber
 */

import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { validNumber } from './valid-number';
import * as fixture from './valid-number.fixture.json';

describe('Interviewbit - ValidNumber', () => {
  createTestExecutor(<TestFixture<string, number>>fixture).executeTests(
    validNumber,
    generateString
  );
});
