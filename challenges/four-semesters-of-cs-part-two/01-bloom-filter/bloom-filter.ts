// tslint:disable-next-line
const XXH = require('xxhashjs');

const h1 = (s: string) =>
  Math.abs(
    XXH.h32(0xabcd)
      .update(s)
      .digest()
      .toNumber() % 100
  );
const h2 = (s: string) =>
  Math.abs(
    XXH.h32(0x1234)
      .update(s)
      .digest()
      .toNumber() % 100
  );
const h3 = (s: string) =>
  Math.abs(
    XXH.h32(0x6789)
      .update(s)
      .digest()
      .toNumber() % 100
  );

class BloomFilter {
  public arr: number[];

  constructor() {
    this.arr = Array(100).fill(0);
  }

  public add(s: string): void {
    this.arr[h1(s)] = 1;
    this.arr[h2(s)] = 1;
    this.arr[h3(s)] = 1;
  }

  public contains(s: string): boolean {
    return !!(this.arr[h1(s)] && this.arr[h2(s)] && this.arr[h3(s)]);
  }
}

export { BloomFilter };
