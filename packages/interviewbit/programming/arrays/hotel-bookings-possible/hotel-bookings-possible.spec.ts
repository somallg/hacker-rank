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

type Input = [number[], number[], number];
type Output = number;

describe('Interviewbit - HotelBookingsPossible', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([arrivals, departures, k]: Input) =>
      hotelBookingsPossible(arrivals, departures, k),
    hotelBookingsPossible.name,
    (inputSize: number) => [
      generateArray(inputSize),
      generateArray(inputSize),
      inputSize / 2
    ]
  );
});
