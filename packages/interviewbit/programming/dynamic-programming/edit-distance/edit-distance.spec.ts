/**
 * Test specs for edit-distance problem
 * EditDistance
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { editDistance } from './edit-distance';
import * as fixture from './edit-distance.fixture.json';

type Input = [string, string];
type Output = number;

describe('Interviewbit - EditDistance', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([a, b]: Input) => editDistance(a, b),
    editDistance.name
  );
});
