/**
 * Test specs for hotel-bookings-possible problem
 * Interviewbit - HotelBookingsPossible
 */

import * as ut from '@challenges/util';

import { hotelBookingsPossible } from './hotel-bookings-possible';
import * as fixture from './hotel-bookings-possible.fixture.json';

// prettier-ignore
const testFixture = fixture as ut.TestFixture<[number[], number[], number], number>;

describe('Interviewbit - HotelBookingsPossible', () => {
  ut.createTestExecutor(testFixture).executeTests(
    ([arrivals, departures, k]) =>
      hotelBookingsPossible(arrivals, departures, k),
    hotelBookingsPossible.name,
    inputSize => [
      ut.generateArray(inputSize),
      ut.generateArray(inputSize),
      inputSize / 2
    ]
  );
});
