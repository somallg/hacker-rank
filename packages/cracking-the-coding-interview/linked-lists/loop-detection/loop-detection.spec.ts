/**
 * Test specs for loop-detection problem
 * LoopDetection
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { loopDetection } from './loop-detection';
import * as fixture from './loop-detection.fixture.json';

describe('CrackingTheCodingInterview - LoopDetection', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[], boolean>> fixture)
    .executeTests(
      loopDetection
    );
});
