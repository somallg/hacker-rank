var HashTableSet = require('./hash-table.js');

describe('hash table set', () => {
  it('hash', () => {
    const table = new HashTableSet();
    expect(table.hash('test 1', 50)).toEqual(table.hash('test 1', 50));
    expect(table.hash('test 2', 10)).toEqual(table.hash('test 2', 10));
    expect(
      table.hash('a much longer strings than the other ones', 255)
    ).toEqual(table.hash('a much longer strings than the other ones', 255));
    expect(table.hash('1 tset', 50)).not.toEqual(table.hash('test 1', 50));
    expect(
      table.hash('a much longer strings than the other ones', 2)
    ).toBeLessThan(3);
  });
  it('add and check', () => {
    const table = new HashTableSet();
    table.add('hi');
    table.add('this is fun');
    table.add('another thing');

    // document.getElementById('target').innerHTML = JSON.stringify(table, null, 4);

    expect(table.check('hi')).toEqual(true);
    expect(table.check('this is fun')).toEqual(true);
    expect(table.check('another thing')).toEqual(true);

    expect(table.check('ih')).toEqual(false);
    expect(table.check('not in the list')).toEqual(false);
    expect(table.check('also not in the list')).toEqual(false);
  });
});
