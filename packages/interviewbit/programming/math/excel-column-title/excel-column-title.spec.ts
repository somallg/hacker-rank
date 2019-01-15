/**
 * Test specs for excel-column-title problem
 * ExcelColumnTitle
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { excelColumnTitle } from './excel-column-title';
import * as fixture from './excel-column-title.fixture.json';

describe('Interviewbit - ExcelColumnTitle', () => {
  createTestExecutor(<TestFixture<number, string>>fixture).executeTests(
    excelColumnTitle,
    identityf
  );
});
