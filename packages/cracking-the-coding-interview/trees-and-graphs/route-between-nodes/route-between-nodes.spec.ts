/**
 * Test specs for route-between-nodes problem
 * RouteBetweenNodes
 */

import * as ut from '@challenges/util';

import { routeBetweenNodes } from './route-between-nodes';
import * as fixture from './route-between-nodes.fixture.json';

describe('CrackingTheCodingInterview - RouteBetweenNodes', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number[][], number, number], boolean>)
    .executeTests(
      ([nums, startIndex, endIndex]) => routeBetweenNodes(nums, startIndex, endIndex),
      routeBetweenNodes.name
    );
});
