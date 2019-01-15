class HashTableSet {
  public table: string[];

  constructor() {
    this.table = [];
  }

  public add(input: string): void {
    this.table[this.hash(input, 255)] = input;
  }

  public check(input: string): boolean {
    return !!this.table[this.hash(input, 255)];
  }

  public hash(input: string, max: number): number {
    let num: number = 0;
    for (let i: number = 0; i < input.length; i = i + 1) {
      num += input.charCodeAt(i) * i;
    }

    return num % max;
  }
}

export { HashTableSet };
