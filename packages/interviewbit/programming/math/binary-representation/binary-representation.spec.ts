/**
 * Test specs for binary-representation problem
 * Interviewbit - BinaryRepresentation
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { binaryRepresentation } from './binary-representation';
import * as fixture from './binary-representation.fixture.json';

describe('Interviewbit - BinaryRepresentation', () => {
  createTestExecutor(<TestFixture<number, string>>fixture).executeTests(
    binaryRepresentation,
    identityf
  );
});
