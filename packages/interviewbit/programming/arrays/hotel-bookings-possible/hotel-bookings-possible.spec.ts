/**
 * Test specs for hotel-bookings-possible problem
 * Interviewbit - HotelBookingsPossible
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { hotelBookingsPossible } from './hotel-bookings-possible';
import * as fixture from './hotel-bookings-possible.fixture.json';

const testFixture = fixture as TestFixture<
  [number[], number[], number],
  number
>;

describe('Interviewbit - HotelBookingsPossible', () => {
  createTestExecutor(testFixture)(
    hotelBookingsPossible.name,
    ([arrivals, departures, k]) =>
      hotelBookingsPossible(arrivals, departures, k),
    inputSize => [
      generateArray(inputSize),
      generateArray(inputSize),
      inputSize / 2
    ]
  );
});
