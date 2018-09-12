/**
 * Test specs for excel-column-title problem
 * ExcelColumnTitle
 */

import * as ut from '@challenges/util';

import { excelColumnTitle } from './excel-column-title';
import * as fixture from './excel-column-title.fixture.json';

describe('Interviewbit - ExcelColumnTitle', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<number, string>).executeTests(
    excelColumnTitle,
    ut.identityf
  );
});
