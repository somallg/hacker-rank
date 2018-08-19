/**
 * Test specs for edit-distance problem
 * EditDistance
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { editDistance } from './edit-distance';

import * as fixture from './edit-distance.fixture.json';
const testFixture = fixture as TestFixture<[string, string], number>;

describe('Interviewbit - EditDistance', () => {
  createTestExecutor(testFixture)(editDistance.name, ([a, b]) =>
    editDistance(a, b)
  );
});
