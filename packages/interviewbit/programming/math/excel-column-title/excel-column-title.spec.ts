/**
 * Test specs for excel-column-title problem
 * ExcelColumnTitle
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { excelColumnTitle } from './excel-column-title';
import * as fixture from './excel-column-title.fixture.json';

describe('Interviewbit - ExcelColumnTitle', () => {
  describe('excelColumnTitle', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, string>).exampleTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(excelColumnTitle(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, string>).correctnessTests.forEach(testCase =>
        it(`${getTestCaseDescription(testCase)}`, () =>
          expect(excelColumnTitle(testCase.input)).toEqual(testCase.output))
      ));

    describe('Performance tests', () =>
      (fixture as Fixture<number, string>).performanceTests.forEach(testCase =>
        it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
          expect(excelColumnTitle(testCase.inputSize)).toBeDefined())
      ));
  });
});
