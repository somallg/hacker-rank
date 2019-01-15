/**
 * Test specs for queue-via-stacks problem
 * QueueViaStacks
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { queueViaStacks } from './queue-via-stacks';
import * as fixture from './queue-via-stacks.fixture.json';

describe('CrackingTheCodingInterview - QueueViaStacks', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[], number | undefined>> fixture)
    .executeTests(
      queueViaStacks
    );
});
