function findMostCommonTitle(myId, getUser, degreesOfSeparation) {
  let queue = [myId];
  const seen = new Set();
  const jobs = {};

  for (let i = 0; i <= degreesOfSeparation; i++) {
    queue = queue
      .filter(e => !seen.has(e)) // only not seen userId
      .map(getUser)
      .map(user => {
        seen.add(user.id);
        jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;

        return user;
      })
      .map(user => user.connections)
      .reduce((acc, user) => acc.concat(user), []);
  }

  // find max frequency in jobs
  return Object.keys(jobs)
    .map(key => ({ job: key, frequency: jobs[key] }))
    .reduce(
      (acc, ele) => {
        if (acc.frequency < ele.frequency) {
          acc = ele;
        }

        return acc;
      },
      {
        job: undefined,
        frequency: -1
      }
    ).job;
}

export { findMostCommonTitle };
