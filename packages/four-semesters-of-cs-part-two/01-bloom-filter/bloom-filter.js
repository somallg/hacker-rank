var XXH = require('xxhashjs');

const h1 = string =>
  Math.abs(
    XXH.h32(0xabcd)
      .update(string)
      .digest()
      .toNumber() % 100
  );
const h2 = string =>
  Math.abs(
    XXH.h32(0x1234)
      .update(string)
      .digest()
      .toNumber() % 100
  );
const h3 = string =>
  Math.abs(
    XXH.h32(0x6789)
      .update(string)
      .digest()
      .toNumber() % 100
  );

class BloomFilter {
  constructor() {
    this.arr = Array(100).fill(0);
  }

  add(string) {
    this.arr[h1(string)] = 1;
    this.arr[h2(string)] = 1;
    this.arr[h3(string)] = 1;
  }

  contains(string) {
    return !!(
      this.arr[h1(string)] &&
      this.arr[h2(string)] &&
      this.arr[h3(string)]
    );
  }
}

module.exports = BloomFilter;
