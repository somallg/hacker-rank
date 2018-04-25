function pubsub() {
  const subscribes: any[] = [];

  return Object.freeze({
    subscribe(subscribers: any) {
      subscribers.push(subscribers);
    },
    publish(publication: any) {
      subscribes.forEach(sub => {
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
