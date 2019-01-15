/**
 * Test specs for single-number problem
 * SingleNumber
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { singleNumber } from './single-number';
import * as fixture from './single-number.fixture.json';

describe('Interviewbit - SingleNumber', () => {
  createTestExecutor(<TestFixture<number[], number>>fixture).executeTests(
    singleNumber,
    generateArray
  );
});
