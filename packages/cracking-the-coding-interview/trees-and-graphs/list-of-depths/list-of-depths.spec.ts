/**
 * Test specs for list-of-depths problem
 * ListOfDepths
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { listOfDepths, listOfDepthsDFS } from './list-of-depths';
import * as fixture from './list-of-depths.fixture.json';

describe('CrackingTheCodingInterview - ListOfDepths', () => {
  createTestExecutor(<TestFixture<object, number[][]>>fixture).executeTests(
    listOfDepths
  );

  createTestExecutor(<TestFixture<object, number[][]>>fixture).executeTests(
    listOfDepthsDFS
  );
});
