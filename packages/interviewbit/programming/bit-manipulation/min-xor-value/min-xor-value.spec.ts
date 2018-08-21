/**
 * Test specs for min-xor-value problem
 * MinXorValue
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { minXorValue } from './min-xor-value';

import * as fixture from './min-xor-value.fixture.json';
const testFixture = fixture as TestFixture<number[], number>;

describe('Interviewbit - MinXorValue', () => {
  createTestExecutor(testFixture)(minXorValue.name, minXorValue, generateArray);
});
