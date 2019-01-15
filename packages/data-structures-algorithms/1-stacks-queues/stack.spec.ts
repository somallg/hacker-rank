import { Stack } from './stack';

describe('Stack', () => {
  it('should work', () => {
    const myMenu: Stack<string> = new Stack<string>();
    myMenu.push('Salad');
    myMenu.push('Meat');
    myMenu.push('Fish');

    expect(myMenu.count()).toEqual(3);
    expect(myMenu.peek()).toEqual('Fish');
    expect(myMenu.pop()).toEqual('Fish');
    expect(myMenu.count()).toEqual(2);
    expect(myMenu.peek()).toEqual('Meat');
  });
});
