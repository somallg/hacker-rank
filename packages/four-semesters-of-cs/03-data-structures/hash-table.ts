class HashTableSet {
  public table: any;

  constructor() {
    this.table = new Array(255);
  }

  public add(input: any): void {
    this.table[this.hash(input, 255)] = input;
  }

  public check(input: any): boolean {
    return !!this.table[this.hash(input, 255)];
  }

  public hash(input: any, max: number): number {
    let num = 0;
    for (let i = 0; i < input.length; i = i + 1) {
      num += input.charCodeAt(i) * i;
    }
    return num % max;
  }
}

export { HashTableSet };
