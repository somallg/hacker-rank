/**
 * Test specs for allocate-books problem
 * AllocateBooks
 */

import {
  Fixture,
  generateArray,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { allocateBooks } from './allocate-books';
import * as fixture from './allocate-books.fixture.json';

describe('Interviewbit - AllocateBooks', () => {
  describe('allocateBooks', () => {
    (fixture as Fixture<[number[], number], number>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () => {
                const [books, m] = testCase.input;
                expect(allocateBooks(books, m)).toEqual(testCase.output);
              });
            } else {
              it(`${getPerformanceTestCaseDescription(testCase)}`, () =>
                expect(
                  allocateBooks(
                    generateArray(testCase.inputSize),
                    testCase.inputSize
                  )
                ).toBeDefined());
            }
          });
        });
      }
    );
  });
});
