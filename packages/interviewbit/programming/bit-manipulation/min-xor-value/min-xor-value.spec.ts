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

describe('Interviewbit - MinXorValue', () => {
  createTestExecutor(<TestFixture<number[], number>>fixture).executeTests(
    minXorValue,
    generateArray
  );
});
