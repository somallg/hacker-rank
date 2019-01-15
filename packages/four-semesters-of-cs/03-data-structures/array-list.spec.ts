import { ArrayList } from './array-list';

type RangeFn<T> = (length: number) => T[];

const range: RangeFn<number> = (length: number): number[] =>
  Array(length)
    .fill(0)
    .map(Number.call, Number);

const abcRange: RangeFn<string> = (length: number): string[] =>
  range(length).map((num: number) => String.fromCharCode(num + 97));

describe('ArrayList', () => {
  let list: ArrayList;

  beforeEach(() => {
    list = new ArrayList();
  });

  it('should construct a correct instance', () => {
    expect(list).toEqual(jasmine.any(ArrayList));
  });

  it('should push correctly', () => {
    abcRange(26).forEach((character: string) => list.push(character));
    expect(list.length).toEqual(26);
  });

  it('should pop correctly', () => {
    abcRange(13).forEach((character: string) => list.push(character));
    expect(list.length).toEqual(13);
    range(10).map(() => list.pop());
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual('c');
  });

  it('should get correctly', () => {
    list.push('first');
    expect(list.get(0)).toEqual('first');
    list.push('second');
    expect(list.get(1)).toEqual('second');
    expect(list.get(0)).toEqual('first');
    abcRange(26).forEach((character: string) => list.push(character));
    expect(list.get(27)).toEqual('z');
    expect(list.get(0)).toEqual('first');
    expect(list.get(9)).toEqual('h');
    list.pop();
    expect(list.get(list.length - 1)).toEqual('y');
  });

  it('should delete correctly', () => {
    abcRange(26).forEach((character: string) => list.push(character));
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual('m');
    expect(list.get(13)).toEqual('o');
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual('b');
  });
});
