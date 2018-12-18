/**
 * Test specs for loop-detection problem
 * LoopDetection
 */

import * as ut from '@challenges/util';

import { loopDetection } from './loop-detection';
import * as fixture from './loop-detection.fixture.json';

describe('CrackingTheCodingInterview - LoopDetection', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], boolean>)
    .executeTests(
      loopDetection
    );
});
