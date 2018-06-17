/**
 * Test specs for day-of-the-programmer problem
 * @url https://www.hackerrank.com/challenges/day-of-the-programmer/problem
 */

import { dayOfTheProgrammer } from './day-of-the-programmer';

describe('Day of the Programmer', () => {
  describe('dayOfTheProgrammer', () => {
    it('should return correct when input 2017', () => {
      expect(dayOfTheProgrammer(2017)).toEqual('13.09.2017');
    });

    it('should return correct when input 2016', () => {
      expect(dayOfTheProgrammer(2016)).toEqual('12.09.2016');
    });

    it('should return correct when input 1800', () => {
      expect(dayOfTheProgrammer(1800)).toEqual('12.09.1800');
    });
  });
});
