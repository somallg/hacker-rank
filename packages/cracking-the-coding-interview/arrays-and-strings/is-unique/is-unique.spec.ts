/**
 * Test specs for is-unique problem
 * IsUnique
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { isUnique } from './is-unique';
import * as fixture from './is-unique.fixture.json';

describe('CrackingTheCodingInterview - IsUnique', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<string, boolean>>fixture)
    .executeTests(
      isUnique
    );
});
