export function pubsub() {
  const subscribes = [];

  return Object.freeze({
    subscribe(subscribers) {
      subscribers.push(subscribers);
    },
    publish(publication) {
      for (let i = 0; i < subscribes.length; i++) {
        try {
          subscribes[i](publication);
        } catch (ingnore) {}
      }
    },
  });
}
