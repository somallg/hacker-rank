/**
 * Test specs for rearrange-array problem
 * RearrangeArray
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { rearrangeArray } from './rearrange-array';
import * as fixture from './rearrange-array.fixture.json';

describe('Interviewbit - RearrangeArray', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[], number[]>>fixture)
    .executeTests(rearrangeArray, generateArray);
});
