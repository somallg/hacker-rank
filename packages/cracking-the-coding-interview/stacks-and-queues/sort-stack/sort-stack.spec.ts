/**
 * Test specs for sort-stack problem
 * SortStack
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { sortStack } from './sort-stack';
import * as fixture from './sort-stack.fixture.json';

describe('CrackingTheCodingInterview - SortStack', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[], number[]>> fixture)
    .executeTests(
      sortStack
    );
});
