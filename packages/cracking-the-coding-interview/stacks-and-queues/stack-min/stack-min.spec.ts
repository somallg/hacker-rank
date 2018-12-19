/**
 * Test specs for stack-min problem
 * StackMin
 */

import * as ut from '@challenges/util';

import { stackMin } from './stack-min';
import * as fixture from './stack-min.fixture.json';

describe('CrackingTheCodingInterview - StackMin', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], number>)
    .executeTests(
      stackMin
    );
});
