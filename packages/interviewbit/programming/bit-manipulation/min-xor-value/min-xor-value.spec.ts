/**
 * Test specs for min-xor-value problem
 * MinXorValue
 */

import * as ut from '@challenges/util';

import { minXorValue } from './min-xor-value';

import * as fixture from './min-xor-value.fixture.json';
const testFixture = fixture as ut.TestFixture<number[], number>;

describe('Interviewbit - MinXorValue', () => {
  ut.createTestExecutor(testFixture).executeTests(
    minXorValue,
    ut.generateArray
  );
});
