/**
 * Test specs for valid-number problem
 * ValidNumber
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { validNumber } from './valid-number';

import * as fixture from './valid-number.fixture.json';
const testFixture = fixture as TestFixture<string, number>;

describe('Interviewbit - ValidNumber', () => {
  describe('validNumber', () => {
    createTestExecutor(testFixture)(validNumber.name, validNumber, inputSize =>
      generateArray(inputSize)
        .map(String)
        .join('')
    );
  });
});
