import { Publisher, pubsub } from './function-challenge-12';

describe('Function Challenge 12', () => {
  describe('pubsub', () => {
    it('should work', () => {
      const pubSub: Publisher<string> = pubsub();
      const messages: string[] = [];

      pubSub.subscribe((arg: string) => {
        messages.push(`1st subscriber: Hello ${arg}`);
      });

      pubSub.subscribe((arg: string) => {
        messages.push(`2nd subscriber: Hello ${arg}`);
      });

      pubSub.publish('Adam');
      pubSub.publish('David');

      expect(messages.length).toEqual(4);
      expect(messages[0]).toEqual('1st subscriber: Hello Adam');
    });
  });
});
