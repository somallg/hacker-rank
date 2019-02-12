/**
 * Test specs for check-subtree problem
 * CheckSubtree
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { BinaryTree } from '../binary-tree';
import { checkSubtree } from './check-subtree';
import * as fixture from './check-subtree.fixture.json';

type Input = [BinaryTree, BinaryTree];
type Output = boolean;

describe('CrackingTheCodingInterview - CheckSubtree', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([t1, t2]: Input) => checkSubtree(t1, t2),
    checkSubtree.name
  );
});
