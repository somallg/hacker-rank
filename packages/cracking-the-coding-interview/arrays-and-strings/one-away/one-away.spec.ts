/**
 * Test specs for one-away problem
 * OneAway
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { oneAway } from './one-away';
import * as fixture from './one-away.fixture.json';

type Input = [string, string];
type Output = boolean;

describe('CrackingTheCodingInterview - OneAway', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      ([first, second]: Input) => oneAway(first, second),
      oneAway.name
    );
});
