import { BloomFilter } from './bloom-filter';

describe('BloomFilter', () => {
  let bf: BloomFilter;

  beforeEach(() => {
    bf = new BloomFilter();
  });

  it('returns false when empty', () => {
    expect(bf.contains('Brian')).toBe(false);
    expect(bf.contains('Sarah')).toBe(false);
    expect(bf.contains('Simona')).toBe(false);
  });

  it('handles one item', () => {
    expect(bf.contains('Brian')).toBe(false);
    bf.add('Brian');
    expect(bf.contains('Brian')).toBe(true);
    expect(bf.contains('Sarah')).toBe(false);
    expect(bf.contains('Simona')).toBe(false);
  });

  it('handles many items', () => {
    const names: string[] = [
      'Brian',
      'Simona',
      'Sarah',
      'Asim',
      'John',
      'Sean',
      'Jessie',
      'Paige',
      'Ashley'
    ];
    names.forEach((item: string) => bf.add(item));
    names.forEach((item: string) => expect(bf.contains(item)).toBe(true));
    ['Sam', 'Chris', 'Taylor', 'Florence'].forEach((item: string) =>
      expect(bf.contains(item)).toBe(false)
    );
  });
});
