/**
 * Test specs for stack-min problem
 * StackMin
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { stackMin } from './stack-min';
import * as fixture from './stack-min.fixture.json';

describe('CrackingTheCodingInterview - StackMin', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[], number>> fixture)
    .executeTests(
      stackMin
    );
});
