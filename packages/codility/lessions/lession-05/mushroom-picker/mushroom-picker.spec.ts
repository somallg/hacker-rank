/**
 * Test specs for mushroom-picker problem
 */

import { solveMushroomPicker } from './mushroom-picker';

describe('MushroomPicker', () => {
  describe('solveMushroomPicker', () => {
    it('should return 25 when input ', () => {
      expect(solveMushroomPicker([2, 3, 7, 5, 1, 3, 9], 4, 6)).toEqual(25);
    });
  });
});
