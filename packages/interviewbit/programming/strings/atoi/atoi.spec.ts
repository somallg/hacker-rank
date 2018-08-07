/**
 * Test specs for atoi problem
 * Atoi
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { atoi } from './atoi';
import * as fixture from './atoi.fixture.json';

describe('Interviewbit - Atoi', () => {
  describe('atoi', () => {
    (fixture as Fixture<string, number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(atoi(testCase.input)).toEqual(testCase.output));
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(atoi('a'.repeat(testCase.inputSize))).toBeDefined());
            }
          });
        });
      }
    );
  });
});
