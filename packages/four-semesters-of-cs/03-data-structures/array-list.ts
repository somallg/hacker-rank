// tslint:disable
class ArrayList {
  public length: number;
  private readonly data: object;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  public push(value: any): void {
    this.data[this.length] = value;
    this.length = this.length + 1;
  }

  public pop(): any {
    const ans: any = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return ans;
  }

  public get(index: number): any {
    return this.data[index];
  }

  public delete(index: number): any {
    const ans: any = this.data[index];
    this._collapseTo(index);
    return ans;
  }

  private _collapseTo(index: number): void {
    for (let i: number = index; i < this.length; i = i + 1) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

export { ArrayList };
