/**
 * Test specs for hotel-bookings-possible problem
 * Interviewbit - HotelBookingsPossible
 */

import { generateArray } from '@challenges/util';

import { hotelBookingsPossible } from './hotel-bookings-possible';

describe('Interviewbit - HotelBookingsPossible', () => {
  describe('hotelBookingsPossible', () => {
    describe('Example tests', () => {
      it('should return 0 for Example 1 input [1, 3, 4] [2, 6, 8] 1', () => {
        expect(hotelBookingsPossible([1, 3, 4], [2, 6, 8], 1)).toEqual(0);
      });

      it('should return 1 for Example 2 input', () => {
        expect(hotelBookingsPossible([1, 2, 3, 4], [10, 2, 6, 14], 4)).toEqual(
          1
        );
      });
    });

    describe('Correctness tests', () => {
      it('should return 1 for Sample 1 input [1, 2], [3, 4]', () => {
        expect(hotelBookingsPossible([1, 2], [3, 4], 2)).toEqual(1);
      });

      it('should return 0 for Extreme input [1] [2]', () => {
        expect(hotelBookingsPossible([1], [2], 0)).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        hotelBookingsPossible(generateArray(100), generateArray(100), 50);
      });

      it('should run for Large 1 input of 10e3 items', () => {
        hotelBookingsPossible(generateArray(10e3), generateArray(10e3), 100);
      });

      it('should run for Large 2 input of 50e3 items', () => {
        hotelBookingsPossible(generateArray(50e3), generateArray(50e3), 1e3);
      });

      it('should run for Large 3 input of 100e3 items', () => {
        hotelBookingsPossible(generateArray(100e3), generateArray(100e3), 10e3);
      });
    });
  });
});
