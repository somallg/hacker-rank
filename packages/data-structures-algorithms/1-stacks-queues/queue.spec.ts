import { Queue } from './queue';

describe('Queue', () => {
  it('should work', () => {
    const myQueue = new Queue<string>();

    myQueue.euqueue('Salad');
    myQueue.euqueue('Meat');
    myQueue.euqueue('Fish');

    expect(myQueue.count()).toEqual(3);
    expect(myQueue.peek()).toEqual('Salad');
    expect(myQueue.dequeue()).toEqual('Salad');
    expect(myQueue.count()).toEqual(2);
    expect(myQueue.peek()).toEqual('Meat');
  });
});
