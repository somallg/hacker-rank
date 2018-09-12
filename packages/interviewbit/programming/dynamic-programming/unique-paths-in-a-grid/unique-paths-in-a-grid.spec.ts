/**
 * Test specs for unique-paths-in-a-grid problem
 * UniquePathsInAGrid
 */

import * as ut from '@challenges/util';

import { uniquePathsInAGrid } from './unique-paths-in-a-grid';

import * as fixture from './unique-paths-in-a-grid.fixture.json';
const testFixture = fixture as ut.TestFixture<number[][], number>;

describe('Interviewbit - UniquePathsInAGrid', () => {
  ut.createTestExecutor(testFixture).executeTests(uniquePathsInAGrid);
});
