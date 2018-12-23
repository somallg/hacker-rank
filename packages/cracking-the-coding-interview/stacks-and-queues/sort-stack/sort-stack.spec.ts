/**
 * Test specs for sort-stack problem
 * SortStack
 */

import * as ut from '@challenges/util';

import { sortStack } from './sort-stack';
import * as fixture from './sort-stack.fixture.json';

describe('CrackingTheCodingInterview - SortStack', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], number[]>)
    .executeTests(
      sortStack
    );
});
