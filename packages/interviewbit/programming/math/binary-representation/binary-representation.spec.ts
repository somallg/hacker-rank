/**
 * Test specs for binary-representation problem
 * Interviewbit - BinaryRepresentation
 */

import * as ut from '@challenges/util';

import { binaryRepresentation } from './binary-representation';
import * as fixture from './binary-representation.fixture.json';

describe('Interviewbit - BinaryRepresentation', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<number, string>).executeTests(
    binaryRepresentation,
    ut.identityf
  );
});
