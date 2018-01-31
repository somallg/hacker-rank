export const specSource = (problem: string) =>
`import { } from './${problem}';

describe('', () => {
  describe('', () => {
    it('should return correct when input ', () => {
      expect().toEqual();
    });
    it('should return incorrect when input ', () => {
      expect().toEqual();
    });
  });
  
  describe('', () => {
    it('should return correct when input ', () => {
      expect().toEqual();
    });
    it('should return incorrect when input ', () => {
      expect().toEqual();
    });
  });
});
`;
