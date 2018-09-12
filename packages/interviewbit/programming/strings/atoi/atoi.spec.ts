/**
 * Test specs for atoi problem
 * Atoi
 */

import * as ut from '@challenges/util';

import { atoi } from './atoi';

import * as fixture from './atoi.fixture.json';

describe('Interviewbit - Atoi', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<string, number>).executeTests(
    atoi,
    ut.generateString
  );
});
