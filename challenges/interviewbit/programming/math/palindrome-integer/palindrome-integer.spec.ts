/**
 * Test specs for palindrome-integer problem
 * Interviewbit - PalindromeInteger
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { palindromeInteger } from './palindrome-integer';
import * as fixture from './palindrome-integer.fixture.json';

describe('Interviewbit - PalindromeInteger', () => {
  describe('palindromeInteger', () => {
    describe('Example tests', () => {
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase => {
        it(`${getTestCaseDescription(testCase)}`, () => {
          expect(palindromeInteger(testCase.input)).toEqual(testCase.output);
        });
      });
    });

    describe('Correctness tests', () => {
      (fixture as Fixture<number, number>).correctnessTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            expect(palindromeInteger(testCase.input)).toEqual(testCase.output);
          });
        }
      );
    });

    xdescribe('Performance tests', () => {
      (fixture as Fixture<number, number>).performanceTests.forEach(
        testCase => {
          it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
            palindromeInteger(testCase.inputSize);
          });
        }
      );
    });
  });
});
