/**
 * Test specs for genomic-range-query problem
 */

import { solveGenomicRangeQuery } from './genomic-range-query';

describe('GenomicRangeQuery', () => {
  describe('solveGenomicRangeQuery', () => {
    it('should return correctly when input (dna, start, end) = (CAGCCTA, [2, 5, 0], [4, 5, 6])', () => {
      expect(solveGenomicRangeQuery('CAGCCTA', [2, 5, 0], [4, 5, 6])).toEqual([
        2,
        4,
        1
      ]);
    });
  });
});
