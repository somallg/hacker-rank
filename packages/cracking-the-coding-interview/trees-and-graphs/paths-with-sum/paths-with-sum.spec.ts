/**
 * Test specs for paths-with-sum problem
 * PathsWithSum
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { BinaryTree } from '../binary-tree';

import { pathsWithSum } from './paths-with-sum';
import * as fixture from './paths-with-sum.fixture.json';

type Input = [BinaryTree, number];

describe('CrackingTheCodingInterview - PathsWithSum', () => {
  createTestExecutor(<TestFixture<Input, number>>fixture).executeTests(
    ([root, targetSum]: Input) => pathsWithSum(root, targetSum)
  );
});
