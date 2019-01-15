interface Publisher<T> {
  subscribe(subscriber: Subscriber<T>): void;
  publish(publication: T): void;
}

type Subscriber<T> = (arg: T) => void;

function pubsub<T>(): Publisher<T> {
  const subscribers: Subscriber<T>[] = [];

  return Object.freeze({
    subscribe(subscriber: Subscriber<T>): void {
      subscribers.push(subscriber);
    },
    publish(publication: T): void {
      subscribers.forEach((sub: Subscriber<T>) => {
        try {
          sub(publication);
        } catch (ignore) {
          // tslint:disable-next-line
          console.log(ignore);
        }
      });
    }
  });
}

export { Publisher, pubsub };
