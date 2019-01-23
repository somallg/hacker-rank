/**
 * Test specs for check-balanced problem
 * CheckBalanced
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { BinaryTree } from '../binary-tree';
import { checkBalanced } from './check-balanced';
import * as fixture from './check-balanced.fixture.json';

describe('CrackingTheCodingInterview - CheckBalanced', () => {
  createTestExecutor(<TestFixture<BinaryTree, boolean>>fixture).executeTests(
    checkBalanced
  );
});
