import * as _ from 'underscore';

import { completeTrie, createTrie, Node } from './tries';
import { CITY_NAMES } from './tries.util';

// tslint:disable:underscore-consistent-invocation
describe('tries', () => {
  it('dataset of 10 – san', () => {
    const root: Node = createTrie(CITY_NAMES.slice(0, 10));
    const completions: string[] = completeTrie(root, 'san');
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, ['san antonio', 'san diego', 'san jose'])
        .length
    ).toBe(3);
  });

  it('dataset of 10 – philadelph', () => {
    const root: Node = createTrie(CITY_NAMES.slice(0, 10));
    const completions: string[] = completeTrie(root, 'philadelph');
    expect(completions.length).toBe(1);
    expect(_.intersection(completions, ['philadelphia']).length).toBe(1);
  });

  it('dataset of 25 – d', () => {
    const root: Node = createTrie(CITY_NAMES.slice(0, 25));
    const completions: string[] = completeTrie(root, 'd');
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, ['dallas', 'detroit', 'denver']).length
    ).toBe(3);
  });

  it('dataset of 200 – new', () => {
    const root: Node = createTrie(CITY_NAMES.slice(0, 200));
    const completions: string[] = completeTrie(root, 'new');
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
    const root: Node = createTrie(CITY_NAMES.slice(0, 200));
    const completions: string[] = completeTrie(root, 'bo');
    expect(completions.length).toBe(2);
    expect(_.intersection(completions, ['boston', 'boise city']).length).toBe(
      2
    );
  });

  it('dataset of 500 – sal', () => {
    const root: Node = createTrie(CITY_NAMES.slice(0, 500));
    const completions: string[] = completeTrie(root, 'sal');
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, ['salt lake city', 'salem', 'salinas']).length
    ).toBe(3);
  });

  it('dataset of 925 – san', () => {
    const root: Node = createTrie(CITY_NAMES);
    const completions: string[] = completeTrie(root, 'san');
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
    const root: Node = createTrie(CITY_NAMES.slice(0, 30));
    const completions: string[] = completeTrie(root, 'seattle');
    expect(completions.length).toBe(1);
    expect(_.intersection(completions, ['seattle']).length).toBe(1);
  });

  it('handle no match', () => {
    const root: Node = createTrie(CITY_NAMES.slice(0, 30));
    const completions: string[] = completeTrie(root, 'no match');
    expect(completions.length).toBe(0);
  });

  it('handle words that are a subset of another string – salin', () => {
    const root: Node = createTrie(CITY_NAMES.slice(0, 800));
    const completions: string[] = completeTrie(root, 'salin');
    expect(completions.length).toBe(2);
    expect(_.intersection(completions, ['salina', 'salinas']).length).toBe(2);
  });
});
