/**
 * Test specs for hotel-bookings-possible problem
 * Interviewbit - HotelBookingsPossible
 */

import {
  Fixture,
  getTestCaseDescription,
  getPerformanceTestCaseDescription,
  generateArray
} from '@challenges/util';

import * as fixture from './hotel-bookings-possible.fixture.json';
import { hotelBookingsPossible } from './hotel-bookings-possible';

type TestCaseInput = [number[], number[], number];

describe('Interviewbit - HotelBookingsPossible', () => {
  describe('hotelBookingsPossible', () => {
    describe('Example tests', () => {
      (fixture as Fixture<any, number>).exampleTests.forEach(testCase => {
        it(`${getTestCaseDescription(testCase)}`, () => {
          const [arrivals, departures, k] = testCase.input as TestCaseInput;
          expect(hotelBookingsPossible(arrivals, departures, k)).toEqual(
            testCase.output
          );
        });
      });
    });

    describe('Correctness tests', () => {
      (fixture as Fixture<any, number>).correctnessTests.forEach(testCase => {
        it(`${getTestCaseDescription(testCase)}`, () => {
          const [arrivals, departures, k] = testCase.input as TestCaseInput;
          expect(hotelBookingsPossible(arrivals, departures, k)).toEqual(
            testCase.output
          );
        });
      });
    });

    describe('Performance tests', () => {
      (fixture as Fixture<any, number>).performanceTests.forEach(testCase => {
        it(`${getPerformanceTestCaseDescription(testCase)}`, () => {
          hotelBookingsPossible(
            generateArray(testCase.inputSize),
            generateArray(testCase.inputSize),
            testCase.inputSize / 2
          );
        });
      });
    });
  });
});
