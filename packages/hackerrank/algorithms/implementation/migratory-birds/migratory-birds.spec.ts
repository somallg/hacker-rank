import { migratoryBirds } from './migratory-birds';

describe('Migratory Birds', () => {
  describe('migratoryBirds', () => {
    it('should return correct when input 6 [1, 4, 4, 4, 5, 3]', () => {
      expect(migratoryBirds(6, [1, 4, 4, 4, 5, 3])).toEqual(4);
    });
  });
});
