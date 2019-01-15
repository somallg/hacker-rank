/**
 * Test specs for atoi problem
 * Atoi
 */

import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { atoi } from './atoi';
import * as fixture from './atoi.fixture.json';

describe('Interviewbit - Atoi', () => {
  createTestExecutor(<TestFixture<string, number>>fixture).executeTests(
    atoi,
    generateString
  );
});
