/**
 * Test specs for edit-distance problem
 * EditDistance
 */

import * as ut from '@challenges/util';

import { editDistance } from './edit-distance';

import * as fixture from './edit-distance.fixture.json';
const testFixture = fixture as ut.TestFixture<[string, string], number>;

describe('Interviewbit - EditDistance', () => {
  ut.createTestExecutor(testFixture).executeTests(
    ([a, b]) => editDistance(a, b),
    editDistance.name
  );
});
