/**
 * Test specs for excel-column-number problem
 * Interviewbit - ExcelColumnNumber
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { excelColumnNumber } from './excel-column-number';
import * as fixture from './excel-column-number.fixture.json';

describe('Interviewbit - ExcelColumnNumber', () => {
  describe('excelColumnNumber', () => {
    describe('Example tests', () => {
      (fixture as Fixture<string, number>).exampleTests.forEach(testCase => {
        it(`${getTestCaseDescription(testCase)}`, () => {
          expect(excelColumnNumber(testCase.input)).toEqual(testCase.output);
        });
      });
    });

    describe('Correctness tests', () => {
      (fixture as Fixture<string, number>).correctnessTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            expect(excelColumnNumber(testCase.input)).toEqual(testCase.output);
          });
        }
      );
    });

    describe('Performance tests', () => {
      (fixture as Fixture<string, number>).performanceTests.forEach(
        testCase => {
          it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
            excelColumnNumber('A'.repeat(testCase.inputSize));
          });
        }
      );
    });
  });
});
