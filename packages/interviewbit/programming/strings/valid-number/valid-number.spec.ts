/**
 * Test specs for valid-number problem
 * ValidNumber
 */

import * as ut from '@challenges/util';

import { validNumber } from './valid-number';

import * as fixture from './valid-number.fixture.json';

describe('Interviewbit - ValidNumber', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<string, number>).executeTests(
    validNumber,
    ut.generateString
  );
});
