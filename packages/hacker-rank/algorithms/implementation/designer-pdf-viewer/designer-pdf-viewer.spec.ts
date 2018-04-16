/**
 * Test specs for designer-pdf-viewer problem
 * @url https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */

import { solveDesignerPdfViewer } from './designer-pdf-viewer';

describe('DesignerPdfViewer', () => {
  describe('solveDesignerPdfViewer', () => {
    it('should return 9 when input ', () => {
      expect(
        solveDesignerPdfViewer(
          [
            1,
            3,
            1,
            3,
            1,
            4,
            1,
            3,
            2,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          'abc'
        )
      ).toEqual(9);
    });

    it('should return 28 when input ', () => {
      expect(
        solveDesignerPdfViewer(
          [
            1,
            3,
            1,
            3,
            1,
            4,
            1,
            3,
            2,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            7
          ],
          'zabc'
        )
      ).toEqual(28);
    });
  });
});
