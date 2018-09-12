/**
 * Test specs for rearrange-array problem
 * RearrangeArray
 */

import * as ut from '@challenges/util';

import { rearrangeArray } from './rearrange-array';
import * as fixture from './rearrange-array.fixture.json';

describe('Interviewbit - RearrangeArray', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], number[]>)
    .executeTests(rearrangeArray, ut.generateArray);
});
