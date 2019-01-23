/**
 * Test specs for validate-bst problem
 * ValidateBst
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { BinaryTree } from '../binary-tree';
import { validateBst } from './validate-bst';
import * as fixture from './validate-bst.fixture.json';

describe('CrackingTheCodingInterview - ValidateBst', () => {
  createTestExecutor(<TestFixture<BinaryTree, boolean>>fixture).executeTests(
    validateBst
  );
});
