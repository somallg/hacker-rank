/**
 * Test specs for one-away problem
 * OneAway
 */

import * as ut from '@challenges/util';

import { oneAway } from './one-away';
import * as fixture from './one-away.fixture.json';

describe('CrackingTheCodingInterview - OneAway', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[string, string], boolean>)
    .executeTests(
      ([first, second]) => oneAway(first, second),
      oneAway.name
    );
});
