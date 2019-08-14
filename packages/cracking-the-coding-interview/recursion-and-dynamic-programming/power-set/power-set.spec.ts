/**
 * Test specs for power-set problem
 * PowerSet
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { powerSet } from './power-set';
import * as fixture from './power-set.fixture.json';

type Input = number[];
type Output = number[][];

describe('CrackingTheCodingInterview - PowerSet', () => {
  // prettier-ignore
  // @ts-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      powerSet
    );
});
