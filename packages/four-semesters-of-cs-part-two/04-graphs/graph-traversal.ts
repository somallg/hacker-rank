/* tslint:disable */
interface User {
  id: number;
  name: string;
  company: string;
  title: string;
  connections: number[];
}
/* tslint:enable */

type GetUserFunction = (id: number) => User | null;

const findMostCommonTitle = (
  myId: number,
  getUser: GetUserFunction,
  degreesOfSeparation: number
) => {
  let queue = [myId];
  const seen = new Set();
  const jobs = {};

  for (let i = 0; i <= degreesOfSeparation; i = i + 1) {
    queue = queue
      .filter(e => !seen.has(e)) // only not seen userId
      .map(id => getUser(id))
      .map(user => {
        seen.add(user ? user.id : 0);
        jobs[user ? user.title : ''] = jobs[user ? user.title : '']
          ? jobs[user ? user.title : ''] + 1
          : 1;

        return user;
      })
      .map(user => (user ? user.connections : []))
      .reduce((acc, user) => acc.concat(user), []);
  }

  // find max frequency in jobs
  return Object.keys(jobs)
    .map(key => ({ job: key, frequency: jobs[key] }))
    .reduce(
      (acc, ele) => {
        if (acc.frequency < ele.frequency) {
          // tslint:disable:no-parameter-reassignment
          acc = ele;
        }

        return acc;
      },
      {
        frequency: -1,
        job: ''
      }
    ).job;
};

export { findMostCommonTitle, User };
