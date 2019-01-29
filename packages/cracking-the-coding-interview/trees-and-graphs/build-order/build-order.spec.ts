/**
 * Test specs for build-order problem
 * BuildOrder
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { buildOrder } from './build-order';
import * as fixture from './build-order.fixture.json';

type Input = [string[], string[][]];
type Output = string[] | undefined;

describe('CrackingTheCodingInterview - BuildOrder', () => {
  // prettier-ignore
  // @ts-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      ([projects, dependencies]: Input) => buildOrder(projects, dependencies),
      buildOrder.name
    );
});
