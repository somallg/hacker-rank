/**
 * Test specs for generate-all-parentheses-ii problem
 * Interviewbit - GenerateAllParenthesesIi
 */

import { generateAllParenthesesIi } from './generate-all-parentheses-ii';

describe('Interviewbit - GenerateAllParenthesesIi', () => {
  describe('generateAllParenthesesIi', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input 3', () => {
        expect(generateAllParenthesesIi(3)).toEqual([
          '((()))',
          '(()())',
          '(())()',
          '()(())',
          '()()()'
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input 4', () => {
        expect(generateAllParenthesesIi(4)).toEqual([
          '(((())))',
          '((()()))',
          '((())())',
          '((()))()',
          '(()(()))',
          '(()()())',
          '(()())()',
          '(())(())',
          '(())()()',
          '()((()))',
          '()(()())',
          '()(())()',
          '()()(())',
          '()()()()'
        ]);
      });

      it('should return for Extreme input 0', () => {
        expect(generateAllParenthesesIi(0)).toEqual([]);
      });
    });

    xdescribe('Performancf tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        generateAllParenthesesIi(100);
      });

      it('should run for Large 1 input of 10e3 items', () => {
        generateAllParenthesesIi(10e3);
      });
    });
  });
});
