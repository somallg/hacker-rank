/**
 * Test specs for insertion problem
 * Insertion
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { insertion } from './insertion';
import * as fixture from './insertion.fixture.json';

describe('CrackingTheCodingInterview - Insertion', () => {
  createTestExecutor(<TestFixture<number[], number>>fixture).executeTests(
    ([n, m, i, j]: number[]) => insertion(n, m, i, j),
    insertion.name
  );
});
