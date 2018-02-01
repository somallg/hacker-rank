import { addOne, separateNumbers } from './separate-the-numbers';

describe('Separate the Numbers', () => {
  describe('separateNumbers function', () => {
    it('should return YES 1 when input is 1234', () => {
      expect(separateNumbers('1234')).toBe('YES 1');
    });
    it('should return YES 9 when input is 91011', () => {
      expect(separateNumbers('91011')).toBe('YES 9');
    });
    it('should return YES 99 when input is 99100', () => {
      expect(separateNumbers('99100')).toBe('YES 99');
    });
    it('should return NO when input is 101103', () => {
      expect(separateNumbers('101103')).toBe('NO');
    });
    it('should return NO when input is 010203', () => {
      expect(separateNumbers('010203')).toBe('NO');
    });
    it('should return NO when input is 13', () => {
      expect(separateNumbers('13')).toBe('NO');
    });

    it('should return NO when input is 1', () => {
      expect(separateNumbers('1')).toBe('NO');
    });
    it('should return NO when input is 1', () => {
      expect(separateNumbers('1')).toBe('NO');
    });

    it('should return YES when input is 99332720572758669933272057275867', () => {
      expect(separateNumbers('99332720572758669933272057275867')).toBe('YES 9933272057275866');
    });
    it('should return NO when input is 99332720572758669933272057274867', () => {
      expect(separateNumbers('99332720572758669933272057274867')).toBe('NO');
    });

    it('should return YES when input is 93178437594967159317843759496716', () => {
      expect(separateNumbers('93178437594967159317843759496716')).toBe('YES 9317843759496715');
    });
    it('should return NO when input is 93178437594967159317843759486716', () => {
      expect(separateNumbers('93178437594967159317843759486716')).toBe('NO');
    });

    it('should return NO when input is 22026106139335712202610613933572', () => {
      expect(separateNumbers('22026106139335712202610613933572')).toBe('YES 2202610613933571');
    });
    it('should return NO when input is 22026106139335712202610613833572', () => {
      expect(separateNumbers('22026106139335712202610613833572')).toBe('NO');
    });

    it('should return YES when input is 63862140762791746386214076279175', () => {
      expect(separateNumbers('63862140762791746386214076279175')).toBe('YES 6386214076279174');
    });
    it('should return NO when input is 63862140762791746386214075279175', () => {
      expect(separateNumbers('63862140762791746386214075279175')).toBe('NO');
    });

    it('should return YES when input is 8342840360736983428403607370', () => {
      expect(separateNumbers('8342840360736983428403607370')).toBe('YES 83428403607369');
    });
    it('should return NO when input is 8342840360736983428493607370', () => {
      expect(separateNumbers('8342840360736983428493607370')).toBe('NO');
    });

    it('should return YES when input is 51073756645096775107375664509678', () => {
      expect(separateNumbers('51073756645096775107375664509678')).toBe('YES 5107375664509677');
    });
    it('should return NO when input is 51073756645096775107375664509668', () => {
      expect(separateNumbers('51073756645096775107375664509668')).toBe('NO');
    });

    it('should return YES when input is 96589218797811259658921879781126', () => {
      expect(separateNumbers('96589218797811259658921879781126')).toBe('YES 9658921879781125');
    });
    it('should return NO when input is 96589218797811259658921879781026', () => {
      expect(separateNumbers('96589218797811259658921879781026')).toBe('NO');
    });
  });

  describe('add', () => {
    it('should add 1 to 9', () => {
      expect(addOne('9')).toBe('10');
    });

    it('should add 1 to 99', () => {
      expect(addOne('9')).toBe('10');
    });

    it('should add 1 to 99999999999', () => {
      expect(addOne('99999999999')).toBe('100000000000');
    });

    it('should add 1 to 9658921879781125', () => {
      expect(addOne('9658921879781125')).toBe('9658921879781126');
    });

    it('should add 1 to 96589218797811259658921879781126', () => {
      expect(addOne('96589218797811259658921879781126')).toBe('96589218797811259658921879781127');
    });
  });
});
