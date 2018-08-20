/**
 * Test specs for unique-paths-in-a-grid problem
 * UniquePathsInAGrid
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { uniquePathsInAGrid } from './unique-paths-in-a-grid';

import * as fixture from './unique-paths-in-a-grid.fixture.json';
const testFixture = fixture as TestFixture<number[][], number>;

describe('Interviewbit - UniquePathsInAGrid', () => {
  createTestExecutor(testFixture)(uniquePathsInAGrid.name, uniquePathsInAGrid);
});
