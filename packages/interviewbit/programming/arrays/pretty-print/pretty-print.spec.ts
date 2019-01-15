/**
 * Test specs for pretty-print problem
 * PrettyPrint
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import * as fixture from './pretty-print.fixture.json';

import { prettyPrint } from './pretty-print';

describe('Interviewbit - PrettyPrint', () => {
  createTestExecutor(<TestFixture<number, number[][]>>fixture).executeTests(
    prettyPrint,
    identityf
  );
});
