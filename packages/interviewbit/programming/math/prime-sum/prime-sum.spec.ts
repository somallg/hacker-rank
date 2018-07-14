/**
 * Test specs for prime-sum problem
 * Interviewbit - PrimeSum
 */

import {
  Fixture,
  getPerformanceTestCaseDescription,
  getTestCaseDescription
} from '@challenges/util';

import { primeSum } from './prime-sum';
import * as fixture from './prime-sum.fixture.json';

describe('Interviewbit - PrimeSum', () => {
  describe('primeSum', () => {
    describe('Example tests', () => {
      (fixture as Fixture<number, number[]>).exampleTests.forEach(testCase => {
        it(`${getTestCaseDescription(testCase)}`, () => {
          expect(primeSum(testCase.input)).toEqual(testCase.output);
        });
      });
    });

    describe('Correctness tests', () => {
      (fixture as Fixture<number, number[]>).correctnessTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            expect(primeSum(testCase.input)).toEqual(testCase.output);
          });
        }
      );
    });

    describe('Performance tests', () => {
      (fixture as Fixture<number, number[]>).performanceTests.forEach(
        testCase => {
          it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
            primeSum(testCase.inputSize);
          });
        }
      );
    });
  });
});
