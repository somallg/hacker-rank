/**
 * Test specs for queue-via-stacks problem
 * QueueViaStacks
 */

import * as ut from '@challenges/util';

import { queueViaStacks } from './queue-via-stacks';
import * as fixture from './queue-via-stacks.fixture.json';

describe('CrackingTheCodingInterview - QueueViaStacks', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], number | null>)
    .executeTests(
      queueViaStacks
    );
});
