/**
 * Test specs for excel-column-number problem
 * Interviewbit - ExcelColumnNumber
 */

import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { excelColumnNumber } from './excel-column-number';
import * as fixture from './excel-column-number.fixture.json';

describe('Interviewbit - ExcelColumnNumber', () => {
  createTestExecutor(<TestFixture<string, number>>fixture).executeTests(
    excelColumnNumber,
    generateString
  );
});
