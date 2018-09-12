/**
 * Test specs for excel-column-number problem
 * Interviewbit - ExcelColumnNumber
 */

import * as ut from '@challenges/util';

import { excelColumnNumber } from './excel-column-number';
import * as fixture from './excel-column-number.fixture.json';

describe('Interviewbit - ExcelColumnNumber', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<string, number>).executeTests(
    excelColumnNumber,
    ut.generateString
  );
});
