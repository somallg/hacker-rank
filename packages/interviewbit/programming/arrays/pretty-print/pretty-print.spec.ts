/**
 * Test specs for pretty-print problem
 * PrettyPrint
 */

import * as ut from '@challenges/util';

import { prettyPrint } from './pretty-print';
import * as fixture from './pretty-print.fixture.json';

describe('Interviewbit - PrettyPrint', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number, number[][]>)
    .executeTests(prettyPrint, ut.identityf);
});
