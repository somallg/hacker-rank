/**
 * Test specs for bst-sequences problem
 * BstSequences
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { BinaryTree } from '../binary-tree';
import { bstSequences } from './bst-sequences';
import * as fixture from './bst-sequences.fixture.json';

describe('CrackingTheCodingInterview - BstSequences', () => {
  createTestExecutor(<TestFixture<BinaryTree, number[][]>>fixture).executeTests(
    bstSequences
  );
});
