function pubsub() {
  const subscribers: any[] = [];

  return Object.freeze({
    subscribe(subscriber: any) {
      subscribers.push(subscriber);
    },
    publish(publication: any) {
      subscribers.forEach(sub => {
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

export { pubsub };
