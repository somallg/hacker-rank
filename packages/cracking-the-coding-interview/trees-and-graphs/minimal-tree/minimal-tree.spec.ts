/**
 * Test specs for minimal-tree problem
 * MinimalTree
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { BinaryTree, minimalTree } from './minimal-tree';
import * as fixture from './minimal-tree.fixture.json';

describe('CrackingTheCodingInterview - MinimalTree', () => {
  // prettier-ignore
  // @ts-ignore
  createTestExecutor(<TestFixture<number[], BinaryTree | undefined>> fixture)
    .executeTests(
      minimalTree,
      minimalTree.name
    );
});
