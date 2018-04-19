import _ from 'underscore';

import { createTrie, completeTrie } from './tries';
import { CITY_NAMES } from './tries.util';

describe('tries', () => {
  it('dataset of 10 – san', () => {
    const root = createTrie(CITY_NAMES.slice(0, 10));
    const completions = completeTrie(root, 'san');
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, ['san antonio', 'san diego', 'san jose'])
        .length
    ).toBe(3);
  });

  it('dataset of 10 – philadelph', () => {
    const root = createTrie(CITY_NAMES.slice(0, 10));
    const completions = completeTrie(root, 'philadelph');
    expect(completions.length).toBe(1);
    expect(_.intersection(completions, ['philadelphia']).length).toBe(1);
  });

  it('dataset of 25 – d', () => {
    const root = createTrie(CITY_NAMES.slice(0, 25));
    const completions = completeTrie(root, 'd');
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, ['dallas', 'detroit', 'denver']).length
    ).toBe(3);
  });

  it('dataset of 200 – new', () => {
    const root = createTrie(CITY_NAMES.slice(0, 200));
    const completions = completeTrie(root, 'new');
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, [
        'new york',
        'new orleans',
        'new haven',
        'newark',
        'newport news'
      ]).length
    ).toBe(3);
  });

  it('dataset of 200 – bo', () => {
    const root = createTrie(CITY_NAMES.slice(0, 200));
    const completions = completeTrie(root, 'bo');
    expect(completions.length).toBe(2);
    expect(_.intersection(completions, ['boston', 'boise city']).length).toBe(
      2
    );
  });

  it('dataset of 500 – sal', () => {
    const root = createTrie(CITY_NAMES.slice(0, 500));
    const completions = completeTrie(root, 'sal');
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, ['salt lake city', 'salem', 'salinas']).length
    ).toBe(3);
  });

  it('dataset of 925 – san', () => {
    const root = createTrie(CITY_NAMES);
    const completions = completeTrie(root, 'san');
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, [
        'san antonio',
        'san angelo',
        'san diego',
        'san jose',
        'san jacinto',
        'san francisco',
        'san bernardino',
        'san buenaventura',
        'san bruno',
        'san mateo',
        'san marcos',
        'san leandro',
        'san luis obispo',
        'san ramon',
        'san rafael',
        'san clemente',
        'san gabriel',
        'santa ana',
        'santa clarita',
        'santa clara',
        'santa cruz',
        'santa rosa',
        'santa maria',
        'santa monica',
        'santa barbara',
        'santa fe',
        'santee',
        'sandy',
        'sandy springs',
        'sanford'
      ]).length
    ).toBe(3);
  });
});

describe('edge cases', () => {
  it('handle whole words – seattle', () => {
    const root = createTrie(CITY_NAMES.slice(0, 30));
    const completions = completeTrie(root, 'seattle');
    expect(completions.length).toBe(1);
    expect(_.intersection(completions, ['seattle']).length).toBe(1);
  });

  it('handle no match', () => {
    const root = createTrie(CITY_NAMES.slice(0, 30));
    const completions = completeTrie(root, 'no match');
    expect(completions.length).toBe(0);
  });

  it('handle words that are a subset of another string – salin', () => {
    const root = createTrie(CITY_NAMES.slice(0, 800));
    const completions = completeTrie(root, 'salin');
    expect(completions.length).toBe(2);
    expect(_.intersection(completions, ['salina', 'salinas']).length).toBe(2);
  });
});
