import { vector, Vector } from './function-challenge-11';

describe('Function Challenge 11', () => {
  describe('vector', () => {
    it('should work', () => {
      const v: Vector<number> = vector();
      v.append(1);
      v.append(2);
      v.append(3);
      v.store(0, 4);

      expect(v.getI(0)).toEqual(4);
      expect(v.getI(1)).toEqual(2);
      expect(v.getI(2)).toEqual(3);
    });

    it('should access to private variable', () => {
      const v: Vector<string> = vector();
      let arr: string[] = [];

      v.append('1');
      v.append('2');
      v.append('3');
      // @ts-ignore
      v.store('push', function(): void {
        // tslint:disable:no-invalid-this
        // @ts-ignore
        arr = this;
      });
      v.append('0');
      expect(arr.length).toEqual(3);
      expect(arr[0]).toEqual('1');
      expect(arr[1]).toEqual('2');
      expect(arr[2]).toEqual('3');
    });
  });
});
