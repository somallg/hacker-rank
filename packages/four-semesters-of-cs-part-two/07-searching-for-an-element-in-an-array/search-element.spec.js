import { linearSearch, binarySearch } from './search-element';

describe('linear search', () => {
  it('should find an object on an unsorted array', () => {
    const lookingFor = { id: 5, name: 'Brian' };
    expect(
      linearSearch(5, [
        { id: 1, name: 'Sam' },
        { id: 11, name: 'Sarah' },
        { id: 21, name: 'John' },
        { id: 10, name: 'Burke' },
        { id: 13, name: 'Simona' },
        { id: 31, name: 'Asim' },
        { id: 6, name: 'Niki' },
        { id: 19, name: 'Aysegul' },
        { id: 25, name: 'Kyle' },
        { id: 18, name: 'Jem' },
        { id: 2, name: 'Marc' },
        { id: 51, name: 'Chris' },
        lookingFor,
        { id: 14, name: 'Ben' }
      ])
    ).toBe(lookingFor);
  });
});

describe('binary search', () => {
  it('should test things', () => {
    const lookingFor = { id: 23, name: 'Brian' };
    expect(
      binarySearch(23, [
        { id: 1, name: 'Sam' },
        { id: 3, name: 'Sarah' },
        { id: 5, name: 'John' },
        { id: 6, name: 'Burke' },
        { id: 10, name: 'Simona' },
        { id: 12, name: 'Asim' },
        { id: 13, name: 'Niki' },
        { id: 15, name: 'Aysegul' },
        { id: 17, name: 'Kyle' },
        { id: 18, name: 'Jem' },
        { id: 19, name: 'Marc' },
        { id: 21, name: 'Chris' },
        lookingFor,
        { id: 24, name: 'Ben' }
      ])
    ).toBe(lookingFor);
  });
});
