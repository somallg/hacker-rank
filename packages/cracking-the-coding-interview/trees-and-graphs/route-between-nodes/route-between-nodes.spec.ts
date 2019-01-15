/**
 * Test specs for route-between-nodes problem
 * RouteBetweenNodes
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { routeBetweenNodes } from './route-between-nodes';
import * as fixture from './route-between-nodes.fixture.json';

type Input = [number[][], number, number];
type Output = boolean;

describe('CrackingTheCodingInterview - RouteBetweenNodes', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      ([nums, startIndex, endIndex]: Input) => routeBetweenNodes(nums, startIndex, endIndex),
      routeBetweenNodes.name
    );
});
