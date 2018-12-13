/**
 * Test specs for is-unique problem
 * IsUnique
 */

import * as ut from '@challenges/util';

import { isUnique } from './is-unique';
import * as fixture from './is-unique.fixture.json';

describe('CrackingTheCodingInterview - IsUnique', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<string, boolean>)
    .executeTests(
      isUnique
    );
});
