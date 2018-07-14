/**
 * Test specs for spiral-order-matrix-i problem
 * Interviewbit - SpiralOrderMatrixI
 */

import {
  Fixture,
  getTestCaseDescription,
  getPerformanceTestCaseDescription,
  generateMatrix
} from '@challenges/util';

import * as fixture from './spiral-order-matrix-i.fixture.json';
import { spiralOrderMatrixI } from './spiral-order-matrix-i';

describe('Interviewbit - SpiralOrderMatrixI', () => {
  describe('spiralOrderMatrixI', () => {
    describe('Example tests', () => {
      (fixture as Fixture<number[][], number[]>).exampleTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            expect(spiralOrderMatrixI(testCase.input)).toEqual(testCase.output);
          });
        }
      );
    });

    describe('Correctness tests', () => {
      (fixture as Fixture<number[][], number[]>).correctnessTests.forEach(
        testCase => {
          it(`${getTestCaseDescription(testCase)}`, () => {
            expect(spiralOrderMatrixI(testCase.input)).toEqual(testCase.output);
          });
        }
      );
    });

    describe('Performance tests', () => {
      (fixture as Fixture<number[][], number[]>).performanceTests.forEach(
        testCase => {
          it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
            spiralOrderMatrixI(generateMatrix(testCase.inputSize));
          });
        }
      );
    });
  });
});
