import { Queue } from './queue';

describe('Queue', () => {
  it('should work', () => {
    const myQueue: Queue<string> = new Queue<string>();

    myQueue.enqueue('Salad');
    myQueue.enqueue('Meat');
    myQueue.enqueue('Fish');

    expect(myQueue.count()).toEqual(3);
    expect(myQueue.peek()).toEqual('Salad');
    expect(myQueue.dequeue()).toEqual('Salad');
    expect(myQueue.count()).toEqual(2);
    expect(myQueue.peek()).toEqual('Meat');
  });
});
